import { Navbar } from "@/components/Navbar"

export const Layout = ({children}: any) => {
	return (
		<>
			<Navbar />
			<main>
				{children}
			</main>
		</>
	)
}
