// Calculator

const megaCalc ={
    currentValue: 0,

    setValue(value) {
        this.currentValue = value;
        console.log(this.currentValue);
    },

    core : {
        'plus' : (currentVal, add) => currentVal + add,
        'minus' : (currentVal, subtract) => currentVal - subtract
    },

    plugins : {},

    press(buttonName, newVal) {
        const func = this.core[buttonName] || this.plugins[buttonName];
        this.setValue(func(this.currentValue, newVal));
    },

    register(plugin) {
        const { name, exec } = plugin;
        this.plugins[name] = exec;
    }
    
};

// The plugin 

const squaredPlugin = {
    name : 'squared',
    exec: function(currentValue) {
        return currentValue * currentValue;
    }
};

megaCalc.register(squaredPlugin);

// Trying how it works

megaCalc.setValue(6);
megaCalc.press('plus', 8);
megaCalc.press('minus', 3);
megaCalc.press('squared');
