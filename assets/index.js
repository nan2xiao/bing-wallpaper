(function() {
	const t = document.createElement("link")
		.relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
	new MutationObserver(e => {
			for (const r of e)
				if (r.type === "childList")
					for (const s of r.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
		})
		.observe(document, {
			childList: !0,
			subtree: !0
		});

	function n(e) {
		const r = {};
		return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
	}

	function i(e) {
		if (e.ep) return;
		e.ep = !0;
		const r = n(e);
		fetch(e.href, r)
	}
})();
const d = "https://bing.shangzhenyang.com/api";

function l() {
	window.open(d + "/1080p")
}
window.addEventListener("keydown", o => {
	(o.ctrlKey || o.metaKey) && o.key === "s" && (o.preventDefault(), l())
});
window.addEventListener("load", async () => {
	const o = document.getElementById("copyright");
	if (o) try {
		const t = await fetch(d + "/json");
		if (!t.ok) throw new Error(t.status.toString());
		const n = await t.json();
		if (n) {
			const i = n.images[0];
			o.textContent = i.copyright
		}
	} catch (t) {
		console.error(t), t instanceof Error && (o.textContent = `Error: ${t.message}`)
	}
});

var a;
(a = document.getElementById("footer")) == null || a.addEventListener("click", l);
