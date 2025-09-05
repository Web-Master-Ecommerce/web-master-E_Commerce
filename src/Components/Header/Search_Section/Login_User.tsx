
export default function Login_User() {

const role = 'USER'
  return (
    <div className="mr-auto login-icon cursor-pointer w-fit">
      {/*User Logged*/}
      {
          (
            <div className='flex justify-between md:justify-center items-center'>
              <div className='flex w-full md:flex-col justify-center items-center gap-1'>
                <img src={'https://static.vecteezy.com/system/resources/previews/060/423/145/non_2x/business-avatar-icon-with-a-simple-clean-design-featuring-a-man-in-a-suit-suitable-for-online-profiles-or-websites-free-png.png'} alt='user-image' width={50} height={50} />
                <span >Abdalla</span>
                <button  className='order-1 md:order-3 p-1 bg-primary text-white rounded cursor-pointer'>Logout</button>
              </div>
            </div>

          )
          
          // <Link to={'/login'} className='cursor-pointer'>
          //   <icon.IoPersonCircleOutline className='text-[30px] text-primary' />
          // </Link>
      }
    </div>
  )
}
