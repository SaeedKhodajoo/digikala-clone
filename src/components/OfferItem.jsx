
function OfferItem({ product }) {
  return (
    <div className="bg-white flex flex-col gap-6 h-64 min-w-[180px] w-44 p-2">
      <div className="flex items-center justify-center">
        <div className=" w-32 h-40">
          <img
            src={require(`../assets/images/${product.name}.png`)}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex font-yekan justify-between">
        <div>
          {" "}
          <span className="flex items-center justify-center bg-red-500 text-white rounded-xl px-1 text-sm">
            % 36
          </span>{" "}
        </div>
        <div>
          <div>
            {product.price} <span>تومان</span>
          </div>
          <div className="text-sm line-through text-gray-400">
            {((product.price * 36) / 100).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferItem;
