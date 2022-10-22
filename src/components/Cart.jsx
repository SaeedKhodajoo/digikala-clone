import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="relative">
      <div className=" grid grid-cols-12 gap-3 font-yekan px-3 mb-28">
        <div className="col-span-12 lg:col-span-9 border rounded-lg">
          <div className="mb-6 pr-5 pt-4">
            <h2 className="text-xl">سبد خرید شما</h2>
            <span className="text-gray">{cart.totalQuantity} کالا</span>
          </div>
          {cart.totalQuantity === 0 ? (
            <div className="flex items-center justify-center">
              <h2 className="text-lg"> سبد خرید شما خالیست</h2>
            </div>
          ) : (
            ""
          )}
          {cart.items.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })}
        </div>
        <hr className="col-span-12 lg:hidden" />
        <div className="lg:col-span-3 col-span-12 lg:max-h-72 lg:sticky lg:top-24 lg:border rounded lg:p-4 px-2 flex flex-col lg:justify-between gap-2">
          <div className="flex items-center justify-between">
            <span>قیمت کالاها ({cart.totalQuantity})</span>
            <span>{cart.cartPrice} تومان</span>
          </div>
          <div className="flex items-center justify-between gap-5">
            <span>جمع سبد خرید با تخفیف 20 درصدی</span>{" "}
            <span>{((cart.cartPrice * 80) / 100)} تومان</span>
          </div>
          <p className="text-gray-400 text-sm">
            هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
            می‌شود
          </p>
          <button
            disabled={cart.totalQuantity === 0}
            className="hidden lg:block bg-red-500 px-6 py-2 rounded-lg text-white w-full disabled:bg-gray-400"
          >
            ادامه
          </button>
        </div>
        <div className="fixed lg:hidden bottom-0 left-0 right-0 flex justify-between px-3 py-4 bg-white z-10 border-t-4 shadow-xl">
          <button
            disabled={cart.totalQuantity === 0}
            className='bg-red-500 px-6 py-2 rounded-lg text-white w-6/12 disabled:bg-gray-400'
          >
            ادامه
          </button>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">جمع سبد خرید</span>
            <span className="text-sm">{((cart.cartPrice * 80) / 100)} تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
