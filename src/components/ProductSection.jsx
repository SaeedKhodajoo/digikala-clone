import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {  useState } from "react";
import ProductItem from "./ProductItem";
import { products as productsData } from "../assets/data/data";
import { Drawer } from "@mui/material";

function ProductSection() {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setfilteredProducts] = useState(productsData);
  const [priceRangeIsHidden, setpriceRangeIsHidden] = useState(true);
  const [priceRange, setpriceRange] = useState(1000);
  const [isAvailable, setIsAvailable] = useState(false);
  const [open, setOpen] = useState(false);


  const priceFilterHandler = () => {
    setpriceRangeIsHidden(!priceRangeIsHidden);
  };

  const handleInput = (e) => {
    setpriceRange(e.target.value);

    let coppyArray = [...products];

    setfilteredProducts(
      coppyArray.filter((c) => {
        return c.price < parseInt(priceRange, 10);
      })
    );

  };


  const sortChangeHandler = (e) => {
    let copyArray = [...filteredProducts];

    if (e.target.value === "asc") {
      copyArray.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (e.target.value === "desc") {
      copyArray.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (e.target.value === "default") {
      copyArray.sort((a, b) => {
        return a.id - b.id;
      });
    }

    setfilteredProducts(copyArray);
  };

  const isAvailableHandler = () => {
    setIsAvailable(!isAvailable);

    const copyArray = [...filteredProducts];

    isAvailable &&
      console.log(copyArray.filter((product) => product.isAvailable));
    !isAvailable
      ? setfilteredProducts(copyArray.filter((product) => product.isAvailable))
      : setfilteredProducts(products);
  };

  return (
    <section className="flex flex-col gap-4 mb-10 px-4 w-full mt-8">
      <div className="font-yekan text-2xl ">فروشگاه / محصولات</div>
      <div className="lg:hidden font-yekan flex items-center gap-6 px-6 text-lg w-full">
        <span
          className="cursor-pointer border-b-2 px-2"
          onClick={() => setOpen(true)}
        >
          فیلتر
        </span>
        <Drawer open={open} anchor={"bottom"} onClose={() => setOpen(false)}>
          <div className="p-5">
            <h1 className="mb-4 text-xl">فیلترها</h1>

            <div className="flex flex-col gap-3">
              <span className="flex flex-col gap-4 text-lg py-2">
                <div className="flex items-center justify-between">
                  محدوده قیمت
                  {priceRangeIsHidden ? (
                    <ChevronDownIcon
                      className="w-7 h-7"
                      onClick={priceFilterHandler}
                    />
                  ) : (
                    <ChevronUpIcon
                      className="w-7 h-7"
                      onClick={priceFilterHandler}
                    />
                  )}
                </div>
                <div
                  className={`${priceRangeIsHidden && "hidden"} relative px-3`}
                >
                  <input
                    type="range"
                    onInput={handleInput}
                    value={priceRange}
                    min="0"
                    max="1000"
                    dir="ltr"
                    className="rounded-lg overflow-hidden appearance-none bg-blue-100 h-4  transition-all ease-in-out w-full"
                  />
                  <span className="absolute right-3 top-5">1000</span>
                  <span className="absolute left-3 top-5">{priceRange}</span>
                </div>
              </span>
              <hr />
              <div className="flex items-center justify-between">
                <span className="text-lg">فقط کالاهای موجود</span>

                <label
                  htmlFor="default-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={isAvailable}
                    onChange={isAvailableHandler}
                    id="default-toggle"
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </Drawer>
        <select
          name="sort"
          id="sort"
          className="border-2 font-yekan rounded outline-none"
          onChange={sortChangeHandler}
        >
          <option value="">مرتب سازی ...</option>
          <option value="default">جدیدترین</option>
          <option value="asc">ارزان ترین</option>
          <option value="desc">گران ترین</option>
        </select>
      </div>
      <div className="grid grid-cols-12 lg:gap-10 w-full">
        <div className="hidden lg:block sticky top-20 right-0 col-span-3 font-yekan border p-2 rounded-md h-fit pb-4">
          <h1 className="mb-4 text-xl">فیلترها</h1>

          <div className="flex flex-col gap-3">
            <span className="flex flex-col gap-4 text-lg py-2">
              <div className="flex items-center justify-between">
                محدوده قیمت
                {priceRangeIsHidden ? (
                  <ChevronDownIcon
                    className="w-7 h-7"
                    onClick={priceFilterHandler}
                  />
                ) : (
                  <ChevronUpIcon
                    className="w-7 h-7"
                    onClick={priceFilterHandler}
                  />
                )}
              </div>
              <div
                className={`${priceRangeIsHidden && "hidden"} relative px-3`}
              >
                <input
                  type="range"
                  onInput={handleInput}
                  value={priceRange}
                  min="0"
                  max="1000"
                  dir="ltr"
                  className="rounded-lg overflow-hidden appearance-none bg-blue-100 h-4  transition-all ease-in-out w-full"
                />
                <span className="absolute right-3 top-5">1000</span>
                <span className="absolute left-3 top-5">{priceRange}</span>
              </div>
            </span>
            <hr />
            <div className="flex items-center justify-between">
              <span className="text-lg">فقط کالاهای موجود</span>

              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={isAvailable}
                  onChange={isAvailableHandler}
                  id="default-toggle"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 w-full lg:col-span-9">
          <div>
            <select
              name="choice"
              id="choice"
              className="border-2 mb-4 font-yekan rounded outline-none hidden lg:flex"
              onChange={sortChangeHandler}
            >
              <option value="">مرتب سازی ...</option>
              <option value="default">جدیدترین</option>
              <option value="asc">ارزان ترین</option>
              <option value="desc">گران ترین</option>
            </select>
          </div>
          <div className="grid grid-cols-12 border-t border-b py-5">
            {filteredProducts.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
