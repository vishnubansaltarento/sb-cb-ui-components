export interface ICarousel {
  title?: string,
  redirectUrl?: string,
  openInNewTab?: string,
  banners: IBannerUnit,
  mailTo?: string,
  queryParams?: any,
}


export interface ICarouselStyle {
  bannerMetaClass?: "inline-meta", 
  bannerMetaAlign?: "right" | "left",
  navigationArrows?: "hidden",
  borderRadius: string,
  customHeight: string,
}

interface IBannerUnit {
  xs: string,
  s: string,
  m: string,
  l: string,
  xl: string
}
