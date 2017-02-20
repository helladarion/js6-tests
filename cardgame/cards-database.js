cards = {
  player-role: {
    gold-digger: {
      amount: 7,
      type: "Player Role"
    },
    saboteur: {
      amount: 4,
      type: "Player Role"
    },
  },
  // use, up down, left, right
  // create a linkedlist to store the cards

  road: [
    {
      type: "gold-digger",
      up: true,
      down: true,
      left: true,
      right: true,
      // shape: "plus",
      amount: 5,
    },
    {
      type: "gold-digger",
      up: false,
      down: true,
      left: true,
      right: false,
      // shape: "curve-left",
      amount: 4,
    },
    {
      type: "gold-digger",
      up: false,
      down: true,
      left: false,
      right: true,
      // shape: "curve-right",
      amount: 5,
    },
    {
      type: "gold-digger",
      up: false,
      down: true,
      left: true,
      right: true,
      // shape: "T",
      amount: 5,
    },
    {
      type: "gold-digger",
      up: true,
      down: true,
      left: true,
      right: false,
      // shape: "vertical-left",
      amount: 5,
    },
    {
      type: "gold-digger",
      up: false,
      down: false,
      left: true,
      right: true,
      // shape: "horizontal",
      amount: 4,
    },
    {
      type: "gold-digger",
      up: true,
      down: true,
      left: false,
      right: false,
      // shape: "vertical",
      amount: 3,
    },
    {
      type: "saboteur",
      up: false,
      down: true,
      left: true,
      right: false,
      // shape: "horizontal",
      amount: 1,
    },
    {
      type: "saboteur",
      up: true,
      down: true,
      left: false,
      right: false,
      // shape: "vertical",
      amount: 1,
    },
    {
      type: "saboteur",
      up: false,
      down: true,
      left: false,
      right: false,
      amount: 1,
    },
    {
      type: "saboteur",
      up: false,
      down: true,
      left: true,
      right: false,
      amount: 1,
    },
    {
      type: "saboteur",
      up: false,
      down: true,
      left: false,
      right: true,
      amount: 1,
    },
    {
      type: "saboteur",
      up: false,
      down: true,
      left: true,
      right: true,
      amount: 1,
    },
    {
      type: "saboteur",
      up: false,
      down: false,
      left: false,
      right: true,
      amount: 1,
    },
    {
      type: "saboteur",
      up: true,
      down: true,
      left: true,
      right: true,
      amount: 1,
    },
    {
      type: "saboteur",
      up: true,
      down: true,
      left: true,
      right: false,
      amount: 1,
    },
  ],
  goal: {
    L: {
      type: coal,
      up: true,
      down: false,
      left: false,
      right: true,
    }
    J: {
      type: coal,
      up: true,
      down: false,
      left: true,
      right: false,
    }
    X: {
      type: gold,
      up: true,
      down: true,
      left: true,
      right: true,
    }
  }
},
action: {
  map: {
    amount: 6,
    effect(){
      console.log("Review one of the objective cards for your team.")
    }
  },
  destruction: {
    amount: 3,
    effect(){
      console.log("Destroy a path of the game.")
    }
  },
  lock: {
    amount: 9,
    types: [{name: "pickaxe", amount: 3}, {name: "lantern", amount: 3}, {name: "vagoon", amount: 3}],

    effect(){
      console.log("The selected player cannot build anymore.")
    }
  },
  unlock: {
    amount: 9,
    types: [{name: "pickaxe", amount: 2}, {name: "lantern", amount: 2}, {name: "vagoon", amount: 2},
            {name: "lantern-vagoon", amount: 1}, {name: "pickaxe-lantern", amount: 1}, {name: "pickaxe-vagoon", amount: 1}], //3 each
    effect(){
      console.log("remove the same simbol lock from a player.")
    }
  }
}
