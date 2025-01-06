import Header from "./Header";

type LayoutType = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutType) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
