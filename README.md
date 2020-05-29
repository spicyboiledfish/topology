# topology
基于antv/G6库，开发服务拓扑图，类似于pinpoint。支持自定义节点、最小缩略图、放大缩小功能、节点拖拽、自适应内容全部展示在画板内（可动态计算缩小倍数），自定义高亮效果、自定义布局、两个节点之间双向线弧度定制等等。
备注：示例图上的数据仅仅是测试，可以忽略。
自定义布局计算节点的算法思路：先找到中心点，以中心点的坐标为起始，如果边（有source, target两个属性）的target指向中心点，那么筛选出来的就是左侧的第一批节点。同理，如果边的source来源于中心点，那么筛选出来的就是右侧的第一批节点。再根据第一批节点去筛选第二批节点，以此类推。
而每一批节点的布局：
#### x: center[0] - biSep / 2 * n;  // center是中心点数组，[0]代表x, [1]代表y
#### y: 先计算这一批节点的纵轴垂直方向上距离中心点的偏移量，然后再根据每一个点的下标 * (每一个节点的高度 + 节点与节点之间的间距) + 偏移量
#### eg: 
```js
  let partLeft1PosOffset = newCenter[1] - (partLeft1Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
  let partLeft1Pos = newCenter[0] - biSep / 2 * 1;
  partLeft1Nodes.forEach(function(p1n, i) {
    p1n.x = partLeft1Pos;
    p1n.y = i * (nodeSep + nodeSize[1]) + partLeft1PosOffset;
  });
 ```
![最终展示图](/例图.png)
