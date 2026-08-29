
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const buttonBox = document.getElementById("teamButtons");
  const panel = document.getElementById("teamPanel");

  const teamCodes = {
    "Chennai Super Kings":"CSK","Delhi Capitals":"DC","Gujarat Titans":"GT",
    "Kolkata Knight Riders":"KKR","Lucknow Super Giants":"LSG","Mumbai Indians":"MI",
    "Punjab Kings":"PBKS","Rajasthan Royals":"RR","Royal Challengers Bengaluru":"RCB",
    "Sunrisers Hyderabad":"SRH"
  };

  const teams = Object.keys(window.IPL_2025_SQUADS);

  function showTeam(name) {
    document.querySelectorAll(".team-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.team === name);
    });

    panel.replaceChildren();

    const head = document.createElement("div");
    head.className = "squad-head";

    const left = document.createElement("div");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "IPL 2025";
    const title = document.createElement("h2");
    title.textContent = name;
    const sub = document.createElement("p");
    sub.className = "result-count";
    sub.textContent = `${window.IPL_2025_SQUADS[name].length} players in the archived squad`;
    left.append(eyebrow, title, sub);

    const code = document.createElement("div");
    code.className = "team-code";
    code.textContent = teamCodes[name];

    head.append(left, code);
    panel.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "player-grid";

    window.IPL_2025_SQUADS[name].forEach((player, index) => {
      const item = document.createElement("div");
      item.className = "player";
      const num = document.createElement("span");
      num.className = "player-number";
      num.textContent = String(index + 1).padStart(2, "0");
      const text = document.createElement("span");
      text.textContent = player;
      item.append(num, text);
      grid.appendChild(item);
    });

    panel.appendChild(grid);
  }

  teams.forEach((name, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "team-btn";
    btn.dataset.team = name;
    btn.textContent = name;
    btn.addEventListener("click", () => showTeam(name));
    buttonBox.appendChild(btn);
    if (index === 0) showTeam(name);
  });
});
