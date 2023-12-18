import React, { useState, useEffect } from "react";
import "./style.css";
export default function Shopping() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=${
            currentPage * 10
          }&limit=2`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentPage]);
  const handleNextPage = (e) => {
    e.preventDefault();
    const page = currentPage + 1;
    setCurrentPage(page);
  };
  const handlePrevPage = (e) => {
    e.preventDefault();
    const page = currentPage - 1;
    if (page > 0) {
      setCurrentPage(page);
    }
  };
  const handlepage1 = (e) => {
    setCurrentPage(1);
  };
  const handlepage2 = (e) => {
    setCurrentPage(2);
  };
  const handlepage3 = (e) => {
    setCurrentPage(3);
  };
  const handlepage4 = (e) => {
    setCurrentPage(4);
  };
  const handlepage5 = (e) => {
    setCurrentPage(5);
  };
  return (
    <div className="px-5 mt-10 flex flex-col container mx-auto  gap-8 my-10">
      <div className="text-4xl font-extrabold">Shopping</div>
      <div className=" flex justify-center items-center ">
        <ul>
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <div className="flex gap-6 mb-8 md:flex-row flex-col">
                  {product.images.map((image, index) => (
                    <div className="border border-slate-200 p-10 rounded-3xl max-w-[100%] md:max-w-[30%] flex flex-col gap-5">
                      <img
                        key={index}
                        src={image}
                        className="image  overflow-hidden rounded-lg"
                        alt={`Product ${index + 1}`}
                      />
                      <button className="bg-green-500 text-white px-3 py-2 rounded-full max-w-[100%] button">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <nav
          aria-label="Page navigation example "
          className="flex justify-center"
        >
          <ul class="inline-flex -space-x-px  h-10 text-4xl font-extrabold py-4 px-2">
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <span className="text-4xl font-extrabold">{"<-"}</span>
              </button>
            </li>
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handlepage1}
              >
                1
              </button>
            </li>
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handlepage2}
              >
                2
              </button>
            </li>
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10  border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                onClick={handlepage3}
              >
                3
              </button>
            </li>
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handlepage4}
              >
                4
              </button>
            </li>
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handlepage5}
              >
                5
              </button>
            </li>
            <li>
              <button
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <span className="text-4xl font-extrabold">{"-->"}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
