let margin = { top: 20, right: 0, bottom: 30, left: 40 };

let width = 1000;
let height = 500;

const data = [
  { name: 'fuguanhui', value: 1 },
  { name: 'liuhe', value: 2 },
  { name: 'cuican', value: 3 },
  { name: 'shemeichen', value: 4 },
  { name: 'zhangyuxin', value: 5 },
  { name: 'yangqingqing', value: 6 },
  { name: 'wangjiaxing', value: 7 },
  { name: 'liwenqiang', value: 8 },
  { name: 'wangyunlong', value: 9 },
  { name: 'mihaibo', value: 10 },
  { name: 'sunhongying', value: 11 },
  { name: 'zhaiyibo', value: 12 },
  { name: 'liuzhipan', value: 13 },
  { name: 'wangyoujiang', value: 14 },
  { name: 'wanghongguang', value: 15 },
  { name: 'liyue', value: 16 },
  { name: 'liuwuchang', value: 17 },
  { name: 'xuxiao', value: 18 },
];

// 创建比例尺
let x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);//padding表示的是序数比例吃内部间隔与外部间隔的设置数值，一般在[0, 1]
let y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top]);

// 创建坐标系
let xAxis = g => g.attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickSizeOuter(0))
  .call(g => g.selectAll('.tick text')
    .attr('y', 10)
    .attr('transform', 'rotate(10)')
  );
let yAxis = g => g.attr('transform', `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select('.domain').remove());

// 创建切换函数
const switchOrder = (order) => {
  switch (order) {
    case "name-ascending":
      data.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "value-ascending":
      data.sort((a, b) => a.value - b.value);
      break;
    case "value-descending":
      data.sort((a, b) => b.value - a.value);
      break;
  }
  x.domain(data.map(d => d.name));
  update();
  return order;
};

// 添加svg容器
const svg = d3.select('body')
  .append('svg')
  .attr('width', width + 'px')
  .attr('height', height + 'px');

// 添加柱状图分组
const bar = svg.append("g")
  .attr("fill", "steelblue")
  .selectAll("rect")
  .data(data)
  .enter().append("rect")
  .style("mix-blend-mode", "multiply")
  .attr("x", d => x(d.name))
  .attr("y", d => y(d.value))
  .attr("height", d => y(0) - y(d.value))
  .attr("width", x.bandwidth());

// 为柱状图绑定坐标
const gx = svg.append("g")
  .call(xAxis);
const gy = svg.append("g")
  .call(yAxis);

// 创建更新函数
const update = () => {
  const t = svg.transition()
    .duration(750);

  bar.data(data, d => d.name)
    .order()
    .transition(t)
    .delay((d, i) => i * 20)
    .attr("x", d => x(d.name));

  gx.transition(t)
    .call(xAxis)
    .selectAll(".tick")
    .delay((d, i) => i * 20);
};

// 初始化，调用一次以名字区分的函数
window.onload = () => {
  switchOrder('name-ascending');
};
// 选中页面的select，设置切换事件
let orderSelect = document.getElementById('orderSelect');
orderSelect.addEventListener('change', (e) => {
  switchOrder(e.target.value);
});



