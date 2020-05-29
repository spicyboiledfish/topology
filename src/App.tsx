import React, { Component } from 'react';
import UsersIcon from './img/users.png';
import MySQLIcon from './img/mySQL.png';
import RedisIcon from './img/redis.png';
import CloudIcon from './img/cloud.png';
import AppIcon from './img/select.png';
import insertCss from 'insert-css';
import G6 from '@antv/g6';
import './App.less';

const ICON_MAP = {
    user: UsersIcon,
    mySQL: MySQLIcon,
    redis: RedisIcon,
    cloud: CloudIcon,
    app: AppIcon
}

insertCss(`
  .g6-minimap {
      width: 152px !important;
      height: 102px !important;
      overflow: hidden;
      position: absolute;
      right: 15px;
      bottom: 8px;
  }
  .g6-minimap-container {
    height: 102px !important;
    border: 1px solid #109730;
    background: #cfead6;
  }
  .g6-minimap-viewport {
    border: 2px solid rgb(25, 128, 255);
  }
`);
const data = {
    nodes: [
        {
            id: '0',
            label: 'all-api',
            cluster: 'center',
            count: 15,
            type: 'app'
        },
        {
            id: '1',
            label: 'zuul-api',
            cluster: 'other',
            count: 40,
            type: 'app'
        },
        {
            id: '2',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '3',
            label: 'ds-msv',
            cluster: 'other',
            count: 14,
            type: 'app'
        },
        {
            id: '4',
            label: 'core-msv',
            cluster: 'other',
            count: 10,
            type: 'app'
        },
        {
            id: '5',
            label: 'da-msv',
            cluster: 'other',
            count: 15,
            type: 'app'
        },
        {
            id: '6',
            label: 'search-query',
            cluster: 'other',
            count: 4,
            type: 'app'
        },
        {
            id: '7',
            label: 'thread-msv',
            cluster: 'other',
            count: 4,
            type: 'app'
        },
        {
            id: '8',
            label: 'news-msv',
            cluster: 'other',
            count: 15,
            type: 'app'
        },
        {
            id: '9',
            label: 'USER',
            cluster: 'other',
            count: 3,
            type: 'user'
        },
        {
            id: '10',
            label: 'links-msv',
            cluster: 'other',
            count: 14,
            type: 'app'
        },
        {
            id: '11',
            label: 'va-msv',
            cluster: 'other',
            count: 3,
            type: 'app'
        },
        {
            id: '12',
            label: 'gdc-api',
            cluster: 'other',
            count: 0,
            type: 'app'
        },
        {
            id: '13',
            label: 'ball_core',
            cluster: 'other',
            count: 0,
            type: 'mySQL'
        },
        {
            id: '14',
            label: 'ball_da',
            cluster: 'other',
            count: 0,
            type: 'mySQL'
        },
        {
            id: '15',
            label: 'REDIS',
            cluster: 'other',
            count: 0,
            type: 'redis'
        },
        {
            id: '16',
            label: 'search_query',
            cluster: 'other',
            count: 0,
            type: 'mySQL'
        },
        {
            id: '17',
            label: 'search_query',
            obj: {
                name1: "searches.ceshi.io:80",
                name2: 'themis.ceshi.io',
                count1: 25429,
                count2: 22662
            },
            cluster: 'other',
            count: 0,
            type: 'cloud'
        },
        {
            id: '18',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '19',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '20',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '21',
            label: 'va-api',
            cluster: 'other',
            count: 4,
            type: 'app'
        },
        {
            id: '22',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '23',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '24',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
        {
            id: '25',
            label: 'ceshi-api',
            cluster: 'other',
            count: 4,
            type: 'app'
        },
        {
            id: '26',
            label: 'msv-ceshi-api',
            cluster: 'other',
            count: 4,
            type: 'app'
        },
        {
            id: '27',
            label: 'USER',
            cluster: 'other',
            count: 0,
            type: 'user'
        },
    ],
    edges: [
        {
            source: '0',
            target: '3',
            label: '5563',
        },
        {
            source: '0',
            target: '4',
            label: '15',
        },
        {
            source: '0',
            target: '5',
            label: '145',
        },
        {
            source: '0',
            target: '6',
            label: '240',
        },
        {
            source: '1',
            target: '0',
            label: '30',
        },
        {
            source: '2',
            target: '0',
            label: '30',
        },
        {
            source: '7',
            target: '1',
            label: '30',
            curveOffset: 15,
            id: 'edge237',
            curvePosition: 0.5
        },
        {
            source: '1',
            target: '7',
            label: '307',
            curveOffset: -15,
            id: 'edge238',
            curvePosition: 0.5
        },
        {
            source: '8',
            target: '1',
            label: '300',
        },
        {
            source: '1',
            target: '8',
            label: '300',
        },
        {
            source: '9',
            target: '1',
            label: '300',
        },
        {
            source: '10',
            target: '1',
            label: '300',
        },
        {
            source: '11',
            target: '1',
            label: '300',
        },
        {
            source: '1',
            target: '11',
            label: '300',
        },
        {
            source: '12',
            target: '1',
            label: '300',
        },
        {
            source: '1',
            target: '12',
            label: '300',
        },
        {
            source: '3',
            target: '13',
            label: '300',
        },
        {
            source: '4',
            target: '13',
            label: '200',
        },
        {
            source: '5',
            target: '14',
            label: '200',
        },
        {
            source: '6',
            target: '15',
            label: '200',
        },
        {
            source: '6',
            target: '16',
            label: '200',
        },
        {
            source: '6',
            target: '17',
            label: '200',
        },
        {
            source: '18',
            target: '7',
            label: '200',
        },
        {
            source: '19',
            target: '8',
            label: '200',
        },
        {
            source: '20',
            target: '10',
            label: '200',
        },
        {
            source: '21',
            target: '11',
            label: '200',
        },
        {
            source: '22',
            target: '11',
            label: '200',
        },
        {
            source: '23',
            target: '12',
            label: '200',
        },
        {
            source: '24',
            target: '18',
            label: '200',
        },
        {
            source: '25',
            target: '18',
            label: '200',
        },
        {
            source: '13',
            target: '26',
            label: '300',
        },
        {
            source: '26',
            target: '27',
            label: '40',
        }
    ],
};
class Topology extends Component<any, any> {
    public graph: any;
    public minimap: any;
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.renderG6();
        this.setEdgesCurOffset(data.edges, 100);
        this.graph.on('node:click', (ev) => {
            const item = ev.item;
            this.highlightSet(item);
        });
        const node = this.graph.findById('0');
        this.highlightSet(node);
    }

    filterDouble = (arr) => {
        let arrResult = [];
        for (let i = 0; i < arr.length; i++) {
          let flag = true;
          for (let j = 0; j < arrResult.length && arrResult.length > 0; j++) {
            const lasNewArr = arrResult[j]
            const {
              source,
              target
            } = arr[i]
            if (source === lasNewArr[0].target && target === lasNewArr[0].source && lasNewArr.length === 1) {
              lasNewArr.push(arr[i])
              flag = false
            }
          }
          if (flag) {
            let newArr = [];
            newArr.push(arr[i]);
            arrResult.push(newArr);
          }
        }
        return arrResult;
      }

    highlightSet = (item) => {
        this.graph.setAutoPaint(false);
        this.graph.getNodes().forEach((node) => {
            this.graph.clearItemStates(node);
            this.graph.setItemState(node, "highlight", node == item);
        });
        this.graph.getEdges().forEach((edge) => {
            if (edge.getSource() === item || edge.getTarget() === item) {
                this.graph.setItemState(edge, "highlight", true);
                edge.toFront();
            } else {
                this.graph.setItemState(edge, "highlight", false);
            }
        });
        this.graph.paint();
        this.graph.setAutoPaint(true);
    }

    setEdgesCurOffset = (edges, offsetDiff) => {
        const edgeMap = this.filterDouble(edges);
      
        for (const key in edgeMap) {
          const arcEdges = edgeMap[key];
          const { length } = arcEdges;
          for (let k = 0; k < length; k++) {
            const current = arcEdges[k];
            const sign = k % 2 === 0 ? 1 : -1;
            if (length === 1) {
              current.curveOffset = 0;
            } else {
              current.curveOffset = 20;
                // sign * (Math.floor(k / 2) * offsetDiff + offsetDiff / 2);
            }
            delete current.groupById;
          }
        }
        return edges;
    }
    
    componentWillUnmount() {
        this.graph.destroy();
    }

    clearAllStats = () => {
        this.graph.setAutoPaint(false);
        this.graph.getNodes().forEach(function(node) {
            this.graph.clearItemStates(node);
        });
        this.graph.getEdges().forEach(function(edge) {
            this.graph.clearItemStates(edge);
        });
        this.graph.paint();
        this.graph.setAutoPaint(true);
    }

    uniqueId = (arr) => {
        return Array.from(new Set(arr))
    }

	renderG6 = () => {
        G6.registerNode('card-node', {
            drawShape(cfg, group) {
                const color = '#b5b5b5';
                const fillColor = '#fff';
                const r = 6;
                const shape = group.addShape('rect', {
                  attrs: {
                    x: 0,
                    y: 0,
                    width: cfg.type === 'cloud' ? 170 : 100,
                    height: cfg.type === 'cloud' ? 90 : 80,
                    stroke: color,
                    fill: fillColor,
                    radius: r,
                    size: 3,
                  },
                  name: 'main-box',
                  draggable: true,
                });
                let imageStyle;
                if (cfg.type === 'redis' || cfg.type === 'mySQL') {
                    imageStyle = {
                        x: 18,
                        y: 15,
                        height: 25,
                        width: 70,
                        cursor: 'pointer',
                        img: ICON_MAP[cfg.type],
                    }
                } else if (cfg.type === 'cloud') {
                    imageStyle = {
                        x: 75,
                        y: 10,
                        height: 20,
                        width: 30,
                        cursor: 'pointer',
                        img: ICON_MAP[cfg.type],
                    }
                } else {
                    imageStyle = {
                        x: 35,
                        y: 15,
                        height: 30,
                        width: 30,
                        cursor: 'pointer',
                        img: ICON_MAP[cfg.type],
                    }
                }
                
                // 左侧图标
                group.addShape('image', {
                  attrs: {
                    cursor: 'pointer',
                    ...imageStyle
                  },
                  name: 'node-icon',
                  draggable: true
                });
                group.addShape('text', {
                    attrs: {
                      x: 50,
                      y: 65,
                      textAlign: 'center',
                      textBaseline: 'middle',
                      lineHeight: 20,
                      text: cfg.type === 'cloud' ? '' : cfg.label,
                      fill: '#333',
                      fontSize: 13,
                      fontWeight: 500,
                    },
                    name: 'title',
                    draggable: true
                  });
                if (cfg.count > 0) {
                    group.addShape('rect', {
                        attrs: {
                            x: cfg.type === 'cloud' ? 147 : 77,
                            y: 3,
                            width: 20,
                            height: 20,
                            fill: '#999',
                            radius: 5,
                            size: 2,
                          },
                          name: 'main-box',
                          draggable: true,
                    });
                };
                group.addShape('text', {
                    attrs: {
                        x: 87,
                        y: 13,
                        textAlign: 'center',
                        textBaseline: 'middle',
                        lineHeight: 20,
                        text: cfg.count === 0 ? '' : cfg.count,
                        fill: '#fff',
                        fontSize: 13,
                    },
                    name: 'title',
                    draggable: true
                });
                if (cfg.type === 'cloud') {
                    group.addShape('text',  {
                        attrs: {
                            x: 5,
                            y: 50,
                            textAlign: 'left',
                            lineHeight: 20,
                            text: "Total: 2",
                            fill: '#00a3f0',
                            fontSize: 12,
                            fontWeight: 500,
                        },
                        name: 'title',
                        draggable: true
                    });
                    group.addShape('text',  {
                        attrs: {
                            x: 130,
                            y: 50,
                            textAlign: 'left',
                            lineHeight: 20,
                            text: 48091,
                            fill: '#333',
                            fontSize: 12,
                            fontWeight: 500,
                        },
                        name: 'title',
                        draggable: true
                    });
                    group.addShape('text',  {
                        attrs: {
                            x: 5,
                            y: 65,
                            textAlign: 'left',
                            lineHeight: 20,
                            text: (cfg.obj as any).name1,
                            fill: '#333',
                            fontSize: 12,
                            fontWeight: 500,
                        },
                        name: 'title',
                        draggable: true
                    });
                    group.addShape('text',  {
                        attrs: {
                            x: 5,
                            y: 80,
                            textAlign: 'left',
                            lineHeight: 20,
                            text: (cfg.obj as any).name2,
                            fill: '#333',
                            fontSize: 12,
                            fontWeight: 500,
                        },
                        name: 'title',
                        draggable: true
                    });
                    group.addShape('text',  {
                        attrs: {
                            x: 130,
                            y: 65,
                            textAlign: 'left',
                            lineHeight: 20,
                            text: (cfg.obj as any).count1,
                            fill: '#333',
                            fontSize: 12,
                            fontWeight: 500,
                        },
                        name: 'title',
                        draggable: true
                    });
                    group.addShape('text',  {
                        attrs: {
                            x: 130,
                            y: 80,
                            textAlign: 'left',
                            lineHeight: 20,
                            text: (cfg.obj as any).count2,
                            fill: '#333',
                            fontSize: 12,
                            fontWeight: 500,
                        },
                        name: 'title',
                        draggable: true
                    });
                }
                
                return shape;
            },
            setState(name, value, item) {
                const group = item.getContainer();
                const shape = group.get('children')[0]; // 顺序根据 draw 时确定
                if(value) {
                    shape.attr('stroke', 'purple');
                    shape.attr('shadowColor', '#666');
                    shape.attr('shadowBlur', 10);
                    shape.attr('shadowOffsetX', 5);
                    shape.attr('shadowOffsetY', 5);
                    shape.attr('lineWidth', 1);
                } else {
                    shape.attr('stroke', '#b5b5b5');
                    shape.attr('shadowColor', 'none');
                    shape.attr('shadowBlur', 0);
                    shape.attr('shadowOffsetX', 0);
                    shape.attr('shadowOffsetY', 0);
                    shape.attr('lineWidth', 1);
                }
            },
            getAnchorPoints() {
                return [
                  [0, 0.5], // 左侧中间
                  [1, 0.5], // 右侧中间
                ];
            },
        });
        G6.registerLayout('relation-layout', {
            execute() {
                let boardWidth = document.body.scrollWidth;
                let boardHeight = document.body.scrollHeight;
                const self = this;
                const center = self.center || [boardWidth, boardHeight];
                const biSep = self.biSep || 100;
                const nodeSep = self.nodeSep || 20;
                const nodeSize = self.nodeSize || [100, 80];
                const newCenter = [center[0] - nodeSize[0] / 2, center[1] - nodeSize[1] / 2]
                const { nodes, edges } = self;

                const partLeft1Nodes = [];
                const partLeft1Ids = [];

                const partLeft2Nodes = [];
                const partLeft2Ids = [];

                const partLeft3Nodes = [];
                const partLeft3Ids = [];

                const partLeft4Nodes = [];
                const partLeft4Ids = [];

                const partRight1Nodes = [];
                const partRight1Ids = [];

                const partRight2Nodes = [];
                const partRight2Ids = [];

                const partRight3Nodes = [];
                const partRight3Ids = [];

                const partRight4Nodes = [];
                const partRight4Ids = [];

                const otherNodes = [];
                let centerNode;
                nodes.forEach(function(node, i) {
                    if (node.cluster === "center") {
                        centerNode = node;
                    } else {
                        otherNodes.push(node);
                    }
                });
                for (let item of edges) {
                    if (item.target === centerNode.id) {
                        // 指向中心点的左侧的第一批节点
                        partLeft1Ids.push(item.source);
                    }
                    if (item.source === centerNode.id) {
                        // 从中心点指出去的右侧的第一批节点
                        partRight1Ids.push(item.target);
                    }
                }

                for (let item of edges) {
                    for (let i of partLeft1Ids) {
                        if (item.target === i) {
                            partLeft2Ids.push(item.source);
                        }
                    }
                }
                
                for (let item of edges) {
                    for (let i of partLeft2Ids) {
                        if (item.target === i && partLeft1Ids.indexOf(item.source) < 0) {
                            partLeft3Ids.push(item.source);
                        }
                    }
                }


                for (let item of edges) {
                    for (let i of partLeft3Ids) {
                        if (item.target === i && partLeft2Ids.indexOf(item.source) < 0) {
                            partLeft4Ids.push(item.source);
                        }
                    }
                }

                for (let item of edges) {
                    for (let i of partRight1Ids) {
                        if (item.source === i) {
                            partRight2Ids.push(item.target);
                        }
                    }
                }

                for (let item of edges) {
                    for (let i of partRight2Ids) {
                        if (item.source === i && partRight1Ids.indexOf(item.target) < 0) {
                            partRight3Ids.push(item.target);
                        }
                    }
                }

                for (let item of edges) {
                    for (let i of partRight3Ids) {
                        if (item.source === i && partRight2Ids.indexOf(item.target) < 0) {
                            partRight4Ids.push(item.target);
                        }
                    }
                }
                for (let item of nodes) {
                    if (partLeft1Ids.indexOf(item.id) >= 0) {
                        partLeft1Nodes.push(item);
                    }
                    if (partLeft2Ids.indexOf(item.id) >= 0) {
                        partLeft2Nodes.push(item);
                    }
                    if (partLeft3Ids.indexOf(item.id) >= 0) {
                        partLeft3Nodes.push(item);
                    }
                    if (partLeft4Ids.indexOf(item.id) >= 0) {
                        partLeft4Nodes.push(item);
                    }
                    if (partRight1Ids.indexOf(item.id) >= 0) {
                        partRight1Nodes.push(item);
                    }
                    if (partRight2Ids.indexOf(item.id) >= 0) {
                        partRight2Nodes.push(item);
                    }
                    if (partRight3Ids.indexOf(item.id) >= 0) {
                        partRight3Nodes.push(item);
                    }
                    if (partRight4Ids.indexOf(item.id) >= 0) {
                        partRight4Nodes.push(item);
                    }
                    // 从第二批节点开始，需要判断此数组中是否包含前一批的节点，如果有，需要去除
                }

                
                let partLeft1PosOffset = newCenter[1] - (partLeft1Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
                let partLeft2PosOffset = newCenter[1] - (partLeft2Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
                let partLeft3PosOffset = newCenter[1] - (partLeft3Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
                let partLeft4PosOffset = newCenter[1] - (partLeft4Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);

                let partRight1PosOffset = newCenter[1] - (partRight1Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
                let partRight2PosOffset = newCenter[1] - (partRight2Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
                let partRight3PosOffset = newCenter[1] - (partRight3Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);
                let partRight4PosOffset = newCenter[1] - (partRight4Nodes.length - 1) / 2 * (nodeSep + nodeSize[1]);

                let partLeft1Pos = newCenter[0] - biSep / 2;
                let partLeft2Pos = newCenter[0] - biSep / 2 * 2;
                let partLeft3Pos = newCenter[0] - biSep / 2 * 3;
                let partLeft4Pos = newCenter[0] - biSep / 2 * 4;

                let partRight1Pos = newCenter[0] + biSep / 2;
                let partRight2Pos = newCenter[0] + biSep / 2 * 2;
                let partRight3Pos = newCenter[0] + biSep / 2 * 3;
                let partRight4Pos = newCenter[0] + biSep / 2 * 4;

                partLeft1Nodes.forEach(function(p1n, i) {
                    p1n.x = partLeft1Pos;
                    p1n.y = i * (nodeSep + nodeSize[1]) + partLeft1PosOffset;
                });

                partLeft2Nodes.forEach(function(p2n, i) {
                    p2n.x = partLeft2Pos;
                    p2n.y = i * (nodeSep + nodeSize[1]) + partLeft2PosOffset;
                });

                partLeft3Nodes.forEach(function(p3n, i) {
                    p3n.x = partLeft3Pos;
                    p3n.y = i * (nodeSep + nodeSize[1]) + partLeft3PosOffset;
                });

                partLeft4Nodes.forEach(function(p4n, i) {
                    p4n.x = partLeft4Pos;
                    p4n.y = i * (nodeSep + nodeSize[1]) + partLeft4PosOffset;
                });
                
                partRight1Nodes.forEach(function(p5n, i) {
                    p5n.x = partRight1Pos;
                    p5n.y = i * (nodeSep + nodeSize[1]) + partRight1PosOffset;
                });

                partRight2Nodes.forEach(function(p6n, i) {
                    p6n.x = partRight2Pos;
                    p6n.y = i * (nodeSep + nodeSize[1]) + partRight2PosOffset;
                });

                partRight3Nodes.forEach(function(p7n, i) {
                    p7n.x = partRight3Pos;
                    p7n.y = i * (nodeSep + nodeSize[1]) + partRight3PosOffset;
                });

                partRight4Nodes.forEach(function(p8n, i) {
                    p8n.x = partRight4Pos;
                    p8n.y = i * (nodeSep + nodeSize[1]) + partRight4PosOffset;
                });
                centerNode.x = newCenter[0];
                centerNode.y = newCenter[1];
            }
        })
        this.minimap = new G6.Minimap({
            size: [150, 100]
        });
        let screenWidth = document.body.scrollWidth;
        let screenHeight = document.body.scrollHeight;
		this.graph = new G6.Graph({
            container: 'topology',
			width: screenWidth,
            height: screenHeight,
			modes: {
				default: ['drag-canvas', 'drag-node', 'zoom-canvas'],
			},
			layout: {
                type: "relation-layout",
                biSep: 650,
                nodeSep: 50,
                nodeSize: [100, 80]
            },
			animate: true,
			defaultNode: {
                size: 30,
                type: 'rect',
				style: {
					lineWidth: 4,
					stroke: '#5B8FF9',
                    fill: '#C6E5FF'
                },
                shape: 'card-node'
            },
			defaultEdge: {
                type: 'quadratic',
				size: 2,
				color: '#b5b5b5',
				style: {
                    stroke: '#b5b5b5',
                    lineAppendWidth: 3,
					endArrow: true
                },
                labelCfg: {
                    autoRotate: true,
                    style: {
                      stroke: 'white',
                      lineWidth: 5,
                      fontSize: 13,
                      fontWeight: 500,
                    },
                },
            },
            edgeStateStyles: {
                highlight: {
                  stroke: "purple",
                  endArrow: {
                    path: 'M 0,0 L 8,4 L 8,-4 Z',
                    fill: '#b5b5b5',
                  },
                }
            },
            plugins: [ this.minimap ]
        })
        this.graph.data(data);
        this.graph.render();
        let xyArr = [];
        for (let item of this.graph.getNodes()) {
            xyArr.push(item._cfg.model)
        }
        this.zoomChange(xyArr);
    }

    zoomChange = (arr) => {
        let maxX = Math.max.apply(Math, arr.map(item => { return item.x }));
        let minX = Math.min.apply(Math, arr.map(item => { return item.x }));
        let maxY = Math.max.apply(Math, arr.map(item => { return item.y }));
        let minY = Math.min.apply(Math, arr.map(item => { return item.y }));
        let viewportWidth = document.body.scrollWidth;
        let actualWidth = maxX - minX;
        let zoomRatio = 1;
        if (actualWidth <= viewportWidth) {
            zoomRatio = 1;
        } else {
            zoomRatio = 1 - (actualWidth - viewportWidth) / actualWidth - 0.05
        }
        this.graph.zoom(zoomRatio, { x: (minX + maxX) / 2, y: (minY + maxY) / 2 });
    }
    
    render() {
        return (
            <div id="topology" className="topology-box" style={{width: '100%', height: 'calc(100vh)', overflow: 'hidden'}}></div>
        );
    }
}

export default Topology;