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
  navigationArrows?: "hidden" | "visible",
  dots?: "hidden" | "visible",
  borderRadius?: string,
  customHeight?: string,
  arrowsPlacement?: "bottom-right" | "bottom-center" | "bottom-left" | "middle-inline",
  responsive: {
    bannerMetaClass?: "inline-meta", 
    bannerMetaAlign?: "right" | "left",
    navigationArrows?: "hidden" | "visible",
    dots?: "hidden" | "visible",
    borderRadius?: string,
    customHeight?: string,
    arrowsPlacement?: "bottom-right" | "bottom-center" | "bottom-left" | "middle-inline",
  }
}

interface IBannerUnit {
  xs: string,
  s: string,
  m: string,
  l: string,
  xl: string
}
