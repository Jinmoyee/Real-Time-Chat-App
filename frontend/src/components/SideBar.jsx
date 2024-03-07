import { IoExitOutline } from "react-icons/io5";
export default function SideBar() {
  return (
    <div className="w-full bg-slate-900 lg:w-[40%] rounded-l-lg relative border-y-2 border-l-2">
      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2 input-primary bg-slate-900">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="users h-[27rem] overflow-y-scroll scrollbar-style">
        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>

        <div className="px-3 pt-4 flex items-center ">
          <div className="flex items-center border-b justify-between w-full">
            <div className="flex items-center">
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <p className="text-white font-medium text-lg ml-2">
                Jinmoyee Thakuria
              </p>
            </div>
            <div className="text-2xl">😂</div>
          </div>
        </div>
      </div>

      <div className="icon absolute bottom-2 left-4">
        <IoExitOutline size={30} color="white" />
      </div>
    </div>
  );
}
