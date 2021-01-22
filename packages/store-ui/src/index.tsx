/**
 * VTEX Store Components
 *
 * Components to create a store with default layout
 */

// All components and styles from Theme UI
export * from 'theme-ui'

// Base components from @vtex-components
// Drawer
export { default as Drawer } from '@vtex-components/drawer'

// Utils
// Merge Theme
export * from './createTheme'
// Base Theme
export * from './theme'
// throttle and debounce
export { default as throttle } from './utils/throttle'
export { default as debounce } from './utils/debounce'

// Local Components
// Header
export * from './Header'
export * from './Header/theme'
// Logo
export * from './Logo'
// ProgressiveLoader
export { default as ProgressiveImage } from './ProgressiveImage'
// ResponsivePicture
export { default as ResponsivePicture } from './ResponsivePicture'
export { default as responsivePictureTheme } from './ResponsivePicture/theme'
// InfoCard
export { default as InfoCard } from './InfoCard'
export { default as InfoCardImage } from './InfoCard/Image'
export { default as InfoCardInfo } from './InfoCard/Info'
export { default as InfoCardInfoAction } from './InfoCard/InfoAction'
export { default as infoCardTheme } from './InfoCard/theme'
// Minicart
export * from './Minicart/Badge'
export * from './Minicart/Button'
export * from './Minicart/Content'
export * from './Minicart/Drawer'
export * from './Minicart/Svg'
export * from './Minicart/theme'
// LocalizedLink
export { default as LocalizedLink } from './LocalizedLink'
// Banner
export { default as Banner } from './Banner'
// RichMarkdown
export { default as RichMarkdown } from './RichMarkdown'
// Search Filters
export * from './SearchFilter/Accordion'
export * from './SearchFilter/AccordionItemCheckbox'
export * from './SearchFilter/theme'
// Search Controls
export * from './SearchControls'
export * from './SearchControls/FiltersButton'
export * from './SearchControls/totalCount'
export * from './SearchControls/Select'
export * from './SearchControls/theme'
// Breadcrumb
export * from './Breadcrumb'
export { default as breadcrumbTheme } from './Breadcrumb/theme'
// Slider
export { default as SliderPaginationDots } from './Slider/PaginationDots'
export { default as SliderArrowLeft } from './Slider/ArrowLeft'
export { default as SliderArrowRight } from './Slider/ArrowRight'
export * from './Slider/hooks/useSlider'
export * from './Slider/hooks/useResponsiveSlider'
// Popover
export * from 'reakit/Popover'
// Centered
export { default as Center } from './Center'
// Product Specification
export * from './ProductSpecification'
// Product Description
export * from './ProductDescription'
// Product Quantity
export * from './ProductQuantity'
// Offer
export { default as OfferPrice } from './Offer/Price'
export { default as OfferSoldOut } from './Offer/SoldOut'
export { default as OfferListPrice } from './Offer/ListPrice'
export { default as OfferContainer } from './Offer/Container'
export { default as OfferInstallments } from './Offer/Installments'
export { default as OfferDiscountBadge } from './Offer/DiscountBadge'
// Product Summary
export { default as ProductSummaryImage } from './ProductSummary/Image'
export { default as ProductSummaryTitle } from './ProductSummary/Title'
export { default as ProductSummaryContainer } from './ProductSummary/Container'
// Product Details
export { default as ProductDetailsTitle } from './ProductDetails/Title'
export { default as ProductDetailsGallery } from './ProductDetails/Gallery'
export { default as ProductDetailsReference } from './ProductDetails/Reference'
// Floating Action Button
export { default as FloatingActionButton } from './FloatingActionButton'
export { default as floatingActionButtonTheme } from './FloatingActionButton/theme'
// GiftList
export { default as GiftList } from './GiftList/index'
export { default as GiftListTitle } from './GiftList/Title'
export { default as GiftListList } from './GiftList/List'
// Skeleton
export { default as Skeleton } from './Skeleton'
// videoIframe
export { default as YoutubeIframe } from './Youtube/Iframe'
export { default as YoutubeThumb } from './Youtube/Thumb'
export * from './Youtube/hooks'
// Carousel
export { default as Carousel } from './Carousel'
export { default as CarouselPage } from './Carousel/Page'
export { default as CarouselArrowLeft } from './Carousel/ArrowLeft'
export { default as CarouselArrowRight } from './Carousel/ArrowRight'
export { default as CarouselPaginationDots } from './Carousel/PaginationDots'
// Auth Providers
export * from './Auth/Providers'
// Product Image Gallery
export { default as ProductImageGalleryArrowLeft } from './ProductImageGallery/ArrowLeft'
export { default as ProductImageGalleryArrowRight } from './ProductImageGallery/ArrowRight'
export { default as ProductImageGalleryPage } from './ProductImageGallery/Page'
export type { Item as ProductImageGalleryItem } from './ProductImageGallery/Page'
export { default as ProductImageGalleryPaginationDots } from './ProductImageGallery/PaginationDots'
export { default as ProductImageGalleryMiniaturesContainer } from './ProductImageGallery/Miniatures/Container'
