export const Navbar = () => {
	return (
		<header className="border border-red-400 w-[100vw] h-[6vh] flex">
			<h1 className="w-[33.33vw] flex items-center justify-center text-dark-green text-xl font-bold ">Shopcart</h1>
			<input type="text" className="bg-gray w-[33.33vw] rounded-full h-[4vh] my-auto pl-[15px]" placeholder="Search Product"/>
			<ul className="flex w-[33.33vw]  justify-around items-center">
				<li>Account</li>
				<li>Cart</li>
			</ul>
		</header>
	)
}	
