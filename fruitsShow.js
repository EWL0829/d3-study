/**
 * Created by liyue.
 * Email: li.yue@okcoin.com
 * Date: 2018-12-10
 * Time: 15:03
 */

/* 要点
 * 1. es6语法
 * 2. enter
 * 3. update
 * 4. exit
 * 5. merge
 * 6. animated transitions(动画过渡)
 * 7. object constancy(对象常量)
 * 8. nested elements(嵌套元素)
 * 9. singular elements(独立元素)
 */


const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const colorScale = d3.scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range(['red', 'yellow']);

const radiusScale = d3.scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range([50, 35]);

const makeFruits = (type) => ({
  type,
  id: Math.random() * 10
});

const xPosition = (data, index) => { return 120 * index + 60 };
const xTextPosition = (data, index) => { return 120 * index + 35 };
// render方法完整的展示了update enter exit整个数据绑定更新删除的模块流程
const render = (selection, props) => {
  const { fruits } = props;
  const circleUpdatePart = selection.selectAll('circle')
    .data(fruits, d => d.id);// 借助key值展示数据绑定的唯一性
  const textUpdatePart = selection.selectAll('text')
    .data(fruits);

  circleUpdatePart.enter()// enter返回一个有数据但无DOM连接的选择集
    .append('circle')
      .attr('cx', xPosition)
      .attr('cy', height / 2)
      .attr('r', 0)
    .merge(circleUpdatePart)// 将已经存在的圆和更新的圆合并起来，官网称之为union，并使用后续的attr去设置属性，才能正确的给update的部分更新颜色和半径;
      .attr('fill', d => colorScale(d.type))
    .transition()
    .duration(1000)
      .attr('cx', xPosition)
      .attr('r', d => radiusScale(d.type));

  circleUpdatePart.exit().transition()
    .duration(1000)
    .attr('r', 0).remove();// 删除已经没有数据绑定的DOM元素

  textUpdatePart.enter()
    .append('text')
    .attr('x', xTextPosition)
    .attr('y', height / 2)
    .merge(textUpdatePart)
    .transition()
    .duration(1000)
    .attr('x', xTextPosition)
    .text(d => d.type);

  textUpdatePart.exit().transition()
    .duration(1000)
    .text('').remove();
};

let fruits = d3.range(5).map(() => makeFruits('apple'));

render(svg, { fruits });

// I just ate an apple[show how the enter part works]
setTimeout(() => {
  fruits.pop();
  render(svg, { fruits });
}, 1000);

// I just replaced an apple with a lemon[show the update part works]
setTimeout(() => {
  fruits[2].type = 'lemon';
  render(svg, { fruits });
}, 2000);

// add some transition animation here
setTimeout(() => {
  fruits = fruits.filter((d, i) => i !== 1);
  render(svg, { fruits });
}, 3000);





