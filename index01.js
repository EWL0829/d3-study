// 初始化svg的宽高
let width = 1000;
let height = 500;

// 初始化margin
let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40,
};

// 给出数据
let data = [
  { date: '2018-07-02 ', value: 3102 },
  { date: '2018-07-03 ', value: 9144 },
  { date: '2018-07-04 ', value: 8049 },
  { date: '2018-07-05 ', value: 8996 },
  { date: '2018-07-06 ', value: 6567 },
  { date: '2018-07-07 ', value: 702 },
  { date: '2018-07-08 ', value: 1054 },
  { date: '2018-07-09 ', value: 10943 },
  { date: '2018-07-10', value: 13608 },
  { date: '2018-07-11', value: 1058 },
  { date: '2018-07-12', value: 6516 },
  { date: '2018-07-13', value: 9080 },
  { date: '2018-07-14', value: 200 },
  { date: '2018-07-15', value: 3503 },
  { date: '2018-07-16', value: 8391 },
  { date: '2018-07-17', value: 8714 },
  { date: '2018-07-18', value: 6756 },
  { date: '2018-07-19', value: 4519 },
  { date: '2018-07-20', value: 8487 },
  { date: '2018-07-21', value: 651 },
  { date: '2018-07-22', value: 377 },
  { date: '2018-07-23', value: 9733 },
  { date: '2018-07-24', value: 8266 },
  { date: '2018-07-25', value: 12805 },
  { date: '2018-07-26', value: 8124 },
  { date: '2018-07-27', value: 8523 },
  { date: '2018-07-28', value: 4581 },
  { date: '2018-07-29', value: 3207 },
  { date: '2018-07-30', value: 8924 },
  { date: '2018-07-31', value: 7680 },
  { date: '2018-08-01 ', value: 6560 },
  { date: '2018-08-02 ', value: 7569 },
  { date: '2018-08-03 ', value: 7765 },
  { date: '2018-08-04 ', value: 238 },
  { date: '2018-08-05 ', value: 309 },
  { date: '2018-08-06 ', value: 7608 },
  { date: '2018-08-07 ', value: 7291 },
  { date: '2018-08-08 ', value: 6379 },
  { date: '2018-08-09 ', value: 8267 },
  { date: '2018-08-10', value: 6862 },
  { date: '2018-08-11', value: 1022 },
  { date: '2018-08-12', value: 5912 },
  { date: '2018-08-13', value: 7119 },
  { date: '2018-08-14', value: 7599 },
  { date: '2018-08-15', value: 7769 },
  { date: '2018-08-16', value: 6845 },
  { date: '2018-08-17', value: 3741 },
  { date: '2018-08-18', value: 1007 },
  { date: '2018-08-19', value: 698 },
  { date: '2018-08-20', value: 6937 },
  { date: '2018-08-21', value: 8081 },
  { date: '2018-08-22', value: 7094 },
  { date: '2018-08-23', value: 8445 },
  { date: '2018-08-24', value: 6065 },
  { date: '2018-08-25', value: 10389 },
  { date: '2018-08-26', value: 2401 },
  { date: '2018-08-27', value: 8907 },
  { date: '2018-08-28', value: 9001 },
  { date: '2018-08-29', value: 8070 },
  { date: '2018-08-30', value: 6763 },
  { date: '2018-08-31', value: 6640 },

  { date: '2018-09-01', value: 5640 },
  { date: '2018-09-02', value: 8100 },
  { date: '2018-09-03', value: 4345 },
  { date: '2018-09-04', value: 7810 },
  { date: '2018-09-05', value: 7751 },
  { date: '2018-09-06', value: 6055 },
  { date: '2018-09-07', value: 8416 },
  { date: '2018-09-08', value: 6567 },
  { date: '2018-09-09', value: 9653 },
  { date: '2018-09-11', value: 8955 },
  { date: '2018-09-12', value: 9019 },
  { date: '2018-09-13', value: 8763 },
  { date: '2018-09-14', value: 6502 },
  { date: '2018-09-15', value: 5509 },
  { date: '2018-09-16', value: 7946 },
  { date: '2018-09-17', value: 7704 },
  { date: '2018-09-18', value: 6540 },
  { date: '2018-09-19', value: 4087 },
  { date: '2018-09-20', value: 7760 },
  { date: '2018-09-21', value: 4987 },
  { date: '2018-09-22', value: 6720 },
  { date: '2018-09-23', value: 7761 },
  { date: '2018-09-24', value: 6723 },
  { date: '2018-09-25', value: 8231 },
  { date: '2018-09-26', value: 9388 },
  { date: '2018-09-27', value: 5677 },
  { date: '2018-09-28', value: 4987 },
  { date: '2018-09-29', value: 4530 },
  { date: '2018-09-30', value: 5634 },

  { date: '2018-10-01', value: 5644 },
  { date: '2018-10-02', value: 5687 },
  { date: '2018-10-03', value: 5988 },
  { date: '2018-10-04', value: 5009 },
  { date: '2018-10-05', value: 6767 },
  { date: '2018-10-06', value: 8099 },
  { date: '2018-10-07', value: 4079 },
  { date: '2018-10-08', value: 6546 },
  { date: '2018-10-09', value: 3878 },
  { date: '2018-10-10', value: 6345 },
  { date: '2018-10-11', value: 4545 },
  { date: '2018-10-12', value: 6758 },
  { date: '2018-10-13', value: 7658 },
  { date: '2018-10-14', value: 8723 },
  { date: '2018-10-15', value: 6723 },
  { date: '2018-10-16', value: 8976 },
  { date: '2018-10-17', value: 6760 },
  { date: '2018-10-18', value: 6499 },
  { date: '2018-10-19', value: 6511 },
  { date: '2018-10-20', value: 4388 },
  { date: '2018-10-21', value: 6522 },
  { date: '2018-10-22', value: 7830 },
  { date: '2018-10-23', value: 6109 },
  { date: '2018-10-24', value: 6599 },
  { date: '2018-10-25', value: 6107 },
  { date: '2018-10-26', value: 6422 },
  { date: '2018-10-27', value: 6520 },
  { date: '2018-10-28', value: 7611 },
  { date: '2018-10-29', value: 6977 },
  { date: '2018-10-30', value: 6400 },
];

let x = d3.scaleTime()
  .domain(d3.extent(data, d => new Date(d.date)))
  .range([margin.left, width - margin.right]);

let y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top]);

let xAxis = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

let yAxis = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select(".domain").remove())
  .call(g => g.select(".tick:last-of-type text").clone()
    .attr("x", 3)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text(data.y));

let line = d3.line()
  .defined(d => !isNaN(d.value)) // 防止出现非数字值导致的图线断裂
  .x(d => x(new Date(d.date)))
  .y(d => y(d.value));

let svg = d3.select('body')
  .append('svg')
  .attr('width', width + 'px')
  .attr('height', height + 'px');

svg.append('g')
  .attr('class', 'x-axis')
  .call(xAxis);

svg.append('g')
  .attr('class', 'y-axis')
  .call(yAxis);

const path = svg.append('path')
  .datum(data)
  .attr('stroke-width', 1.5)
  .attr('stroke', 'steelblue')
  .attr('fill', 'none')
  .attr('d', line);

let toolTip = svg.append("text")
  .text("")
  .attr("font-size", '14px');

const circles = svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('class', 'circle-item')
  .attr('cx', d => x(new Date(d.date)))
  .attr('cy', d => y(d.value))
  .attr('r', 3.5)
  .attr('fill', '#fff')
  .attr('stroke', '#000')
  .attr('stroke-width', '1')
  .attr('cursor', 'pointer')
  .on("mouseover",function(d){
    let self = this;
    d3.select(this)
      .transition()
      .duration(200)
      .attr("r", 5)
      .attr('fill', 'steelblue');

    toolTip.attr("x", function(){
      return x(new Date(d.date));
    })
      .attr("y",function(){
        return y(d.value) - 20;
      })
      .text(`今天李月走了${d.value}步`)
      .attr("text-anchor","middle")
      .attr("fill", 'steelblue');
  })
  .on("mouseout",function(){
    d3.select(this)
      .transition()
      .duration(200)
      .attr("r", 3.5)
      .attr('fill', '#fff');

    toolTip.text("");
  });



