// Tabs: click a tab to show its panel. Scoped per tablist so multiple tab groups can coexist.
(function () {
  var tablists = Array.prototype.slice.call(document.querySelectorAll('[role="tablist"]'));
  if (!tablists.length) return;
  tablists.forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('.offer-tab'));
    var scope = list.closest('section') || document;
    var panels = Array.prototype.slice.call(scope.querySelectorAll('.offer-panel'));
    if (!tabs.length || !panels.length) return;
    function select(name) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-offer') === name;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-offer-panel') === name);
      });
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () { select(t.getAttribute('data-offer')); });
    });
  });
})();
