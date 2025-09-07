import React, { useEffect, useState } from 'react';
import { supabase } from '../../client';
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

export default function Details() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  async function getProductDetail() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.log("Error fetching data", error);
    else setProducts(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id == id);
      setCurrentProduct(foundProduct);
    }
  }, [products, id]);

  if (!currentProduct) return <div>Loading...</div>;

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...currentProduct, quantity }));
    console.log("Added to Cart:", { ...currentProduct, quantity });
  };

  // related products
  const relatedProducts = products.filter(
    (p) =>
      (p.category === currentProduct.category || p.brand === currentProduct.brand) &&
      p.id !== currentProduct.id
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      {/* === Product Details === */}
      <section className="details container mx-auto flex flex-col my-20 gap-6 p-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
            <img
              src={currentProduct.thumbnail}
              alt={currentProduct.title}
              className="w-full lg:w-3/4 h-[400px] rounded-2xl border shadow-md object-contain"
            />
          </div>

          {/* details */}
          <div className="propdetail border shadow-md p-4 flex flex-col gap-3 w-full lg:w-1/2">
            <h3 className="text-xl font-bold">{currentProduct.title}</h3>
            <span className="text-base text-gray-700">
              Price: ${currentProduct.price}
            </span>
            <p className="text-gray-700 text-sm mt-2">{currentProduct.description}</p>

            {/* extra info */}
            <div className="flex flex-wrap gap-2 text-gray-600 text-sm mt-2">
              <span className="border px-3 py-1 rounded-md">{currentProduct.category}</span>
              <span className="border px-3 py-1 rounded-md">{currentProduct.brand}</span>
              <span className="border px-3 py-1 rounded-md">{currentProduct.availabilityStatus}</span>
              <span className="border px-3 py-1 rounded-md">Stock: {currentProduct.stock}</span>
              <span className="border px-3 py-1 rounded-md">Rating: {currentProduct.rating} ★</span>
              <span className="border px-3 py-1 rounded-md">
                {currentProduct.discountPercentage}% off
              </span>
            </div>

            {/* counter */}
            <div className="flex items-center justify-center gap-10 py-1.5 bg-gray-200 rounded-md w-full mx-auto mt-4">
              <button onClick={decrease} className="text-lg font-bold">-</button>
              <span className="text-base">{quantity}</span>
              <button onClick={increase} className="text-lg font-bold">+</button>
            </div>

            {/* add to cart */}
            <button
              onClick={handleAddToCart}
              className="bg-teal-400 py-1.5 !rounded-md hover:bg-teal-500 transition w-full lg:w-auto mt-2"
            >
              Add to Cart
            </button>

            {/* wishlist & share */}
            <div className="flex flex-col lg:flex-row gap-2 w-full mt-2">
              <button className="border py-1.5 w-1/2 px-3 !rounded-md hover:bg-teal-400">
                <i className="fa-solid fa-heart mx-2 text-red-600"></i> Wishlist
              </button>
              <button className="border py-1.5 px-3 w-1/2 !rounded-md hover:bg-teal-400">
                <i className="fa-solid fa-share mx-2 text-black"></i> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === Related Products === */}
      {relatedProducts.length > 0 && (
        <section className="related-products container mx-auto m-10">
          <h3 className="text-xl font-bold mb-4">Related Products</h3>
          <Slider {...sliderSettings}>
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-2 rounded-lg shadow-md border cursor-pointer"
                onClick={() => setCurrentProduct(product)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-contain rounded-md mb-2"
                />
                <h4 className="text-sm font-semibold text-center">{product.title}</h4>
                <p className="text-gray-700 text-sm text-center">${product.price}</p>
              </div>
            ))}
          </Slider>
        </section>
      )}
    </>
  );
}
