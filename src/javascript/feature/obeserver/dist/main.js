;(() => {
  const t = document.querySelector('#id'),
    e = new MutationObserver(function(t) {
      for (const e of t) {
        const { type: t } = e
        switch (t) {
          case 'childList':
            break
          case 'attributes':
            console.log(`${e.attributeName} attribute was modified`)
        }
      }
    })
  e.observe(t, { attributes: !1, childList: !0, subtree: !0 }), e.disconnect()
})()
