export const animationCreate = () => {
	if (typeof window !== "undefined") {
		import("wowjs").then((module) => {
			const WowClass = module.WOW || (module.default && module.default.WOW) || module.default;
			if (WowClass) {
				new WowClass({ live: false }).init();
			}
		});
	}
};
