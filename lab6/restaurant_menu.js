const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$15', 'Oatmeal -$10', 'Frittata -$11'];
const mainCourseMenu = ['Steak -$10', 'Pasta -$12', 'Burger -$5', 'Salmon-$22'];
const dessertMenu = ['Cake -$5', 'Ice Cream -$7', 'Pudding -$4', 'Fruit Salad -$10'];

 const breakfastMenuItemsHTML = 
 breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;