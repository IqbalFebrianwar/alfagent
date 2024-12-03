import Image from "next/image";
import Link from "next/link";

const Drawerside = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-primary text-white min-h-full w-80 p-4">
        <li>
          <div className="flex">
            <Image
              src="https://res.cloudinary.com/df6nytit6/image/upload/v1729494915/client_mario/dashboard_wf0p9i.png"
              width="100"
              height="100"
              alt="icon"
              className="w-4"
            />
            <Link href="/dashboard" className="text-[17px] font-normal py-2">
              Dashboard
            </Link>
          </div>
        </li>
        <li>
          <details close>
            <summary>
              <Image
                src="https://res.cloudinary.com/df6nytit6/image/upload/v1729494915/client_mario/call-center_mbpmld.png"
                width="100"
                height="100"
                alt="icon"
                className="w-4"
              />
              <a className="text-[17px] font-normal py-2">Agent</a>
            </summary>
            <ul>
              <li>
                <Link href="/agent">Daftar Agent</Link>
              </li>
              <li>
                <Link href="/agent/add">Tambah Agent</Link>
              </li>
              <li>
                <details close>
                  <summary>Email</summary>
                  <ul>
                    <li>
                      <Link href="/agent/email/L1">L1</Link>
                    </li>
                    <li>
                      <Link href="/agent/email/L2">L2</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details close>
                  <summary>Telephone</summary>
                  <ul>
                    <li>
                      <Link href="/agent/telephone/L1">L1</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        {/* <li>
          <details close>
            <summary>
              <Image
                src="https://res.cloudinary.com/df6nytit6/image/upload/v1729494915/client_mario/call-center_mbpmld.png"
                width="100"
                height="100"
                alt="icon"
                className="w-4"
              />
              <a className="text-[17px] font-normal py-2">User</a>
            </summary>
            <ul>
              <li>
                <Link href="/user">Daftar User</Link>
              </li>
              <li>
                <Link href="/user/add">Tambah User</Link>
              </li>
            </ul>
          </details>
        </li> */}
        <li>
          <div className="flex">
            <Image
              src="https://res.cloudinary.com/df6nytit6/image/upload/v1729494915/client_mario/email_hzovez.png"
              width="100"
              height="100"
              alt="icon"
              className="w-4"
            />
            <Link href="/email" className="text-[17px] font-normal py-2">
              Email
            </Link>
          </div>
        </li>
        {/* <li>
          <div className="flex">
            <Image
              src="https://res.cloudinary.com/df6nytit6/image/upload/v1729494915/client_mario/note_cpbwzt.png"
              width="100"
              height="100"
              alt="icon"
              className="w-4"
            />
            <Link href="/recording" className="text-[17px] font-normal py-2">Recording</Link>
          </div>
        </li> */}
        <li>
          <div className="flex">
            <Image
              src="https://res.cloudinary.com/df6nytit6/image/upload/v1729494915/client_mario/note_cpbwzt.png"
              width="100"
              height="100"
              alt="icon"
              className="w-4"
            />
            <Link href="/telephone" className="text-[17px] font-normal py-2">
              Telephone
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Drawerside;
