export interface Item {
    id: string;
    main_image: string;
    name: string;
    price: number;
    // type: string;
  }
export interface Product extends Item {
    is_wishlist: boolean;
    product_images: { image: string }[] | null;
    discount_price: number | null;
    description: string | null;
    rate: number | null;
    product_type: string | null | { id: string; product_type: string };
    product_intensity: string | null | { id: string; intensity: string };
}
