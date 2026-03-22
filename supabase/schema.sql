-- 歯科医院テーブル
CREATE TABLE clinics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  prefecture TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  website TEXT,
  specialties TEXT[] DEFAULT '{}',
  hours TEXT,
  closed_days TEXT,
  rating NUMERIC(2,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 口コミテーブル
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '匿名',
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  visit_date TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- インデックス
CREATE INDEX idx_clinics_prefecture ON clinics(prefecture);
CREATE INDEX idx_clinics_city ON clinics(city);
CREATE INDEX idx_clinics_rating ON clinics(rating DESC);
CREATE INDEX idx_clinics_name ON clinics USING gin(name gin_trgm_ops);
CREATE INDEX idx_reviews_clinic_id ON reviews(clinic_id);

-- 口コミ投稿時に評価を自動更新するトリガー
CREATE OR REPLACE FUNCTION update_clinic_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE clinics SET
    rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE clinic_id = NEW.clinic_id),
    review_count = (SELECT COUNT(*) FROM reviews WHERE clinic_id = NEW.clinic_id)
  WHERE id = NEW.clinic_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_rating
AFTER INSERT OR UPDATE OR DELETE ON reviews
FOR EACH ROW EXECUTE FUNCTION update_clinic_rating();

-- RLS（Row Level Security）
ALTER TABLE clinics ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 誰でも読める
CREATE POLICY "clinics_read" ON clinics FOR SELECT USING (true);
CREATE POLICY "reviews_read" ON reviews FOR SELECT USING (true);

-- 誰でも口コミ投稿可能
CREATE POLICY "reviews_insert" ON reviews FOR INSERT WITH CHECK (true);
