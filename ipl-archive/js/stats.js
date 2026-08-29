
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("statsBody");
  const search = document.getElementById("statsSearch");
  const year = document.getElementById("yearFilter");
  const count = document.getElementById("resultCount");

  window.IPL_SEASONS.forEach(s => {
    const option = document.createElement("option");
    option.value = String(s.year);
    option.textContent = String(s.year);
    year.appendChild(option);
  });

  function render() {
    const query = search.value.trim().toLowerCase();
    const selectedYear = year.value;

    const filtered = window.IPL_SEASONS.filter(s => {
      const text = [s.year, s.winner, s.runnerUp, s.orange, s.purple].join(" ").toLowerCase();
      return (selectedYear === "all" || String(s.year) === selectedYear) && text.includes(query);
    });

    body.replaceChildren();

    filtered.forEach(s => {
      const tr = document.createElement("tr");
      const values = [
        [String(s.year), "season"],
        [s.winner], [s.runnerUp],
        [s.orange], [String(s.orangeRuns)],
        [s.purple], [String(s.purpleWickets)]
      ];
      values.forEach(([value, cls]) => {
        const td = document.createElement("td");
        if (cls) td.className = cls;
        td.textContent = value;
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });

    count.textContent = `${filtered.length} season${filtered.length === 1 ? "" : "s"} shown`;
  }

  search.addEventListener("input", render);
  year.addEventListener("change", render);
  render();
});
