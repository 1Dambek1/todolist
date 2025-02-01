export function Footer() {
  return (
    <div className=" pt-20 pb-2 bg-gradient-to-b from-white to-brown-light flex justify-center">
      <div className="w-1140">

        <div className="w-full h-[1px]  mb-5 bg-gray-300"></div>
        
        <div className="flex justify-between">
          <div className="">
            <div className="flex gap-2 items-center">
              <img className="max-w-[20px] max-h-[20px]" src="/blacklogo.png" alt="logo" />
              <span className="text-xl font-bold text-black">todolist</span>
            </div>

          </div>
          <div className="flex gap-5 text-sm items-center">
              <a className="hover:text-gray-300" href="https://github.com/1Dambek1">Github</a>
              <a className="hover:text-gray-300" href="">Instagram</a>
              <a className="hover:text-gray-300" href="">Telegram</a>
              <a className="hover:text-gray-300" href="">Facebook</a>
            </div>
        </div>
      </div>
    </div>
  );
}