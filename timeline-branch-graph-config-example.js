const option = {
   xAxis: {
      min: 0,
      interval: 1,
      max: 5,
      splitLine: { show: false },
   },
   yAxis: {
      min: 0,
      interval: 1,
      max: 4,
      splitLine: { show: false },
   },
   series: [
      {
         symbolSize: 0,
         smooth: true,
         lineStyle: {
            width: 10,
         },
         itemStyle: {
            color: '#00D492',
         },
         data: [
            {
               value: [1, 2],
               symbolSize: 30,
               label: {
                  show: true,
                  position: 'top',
                  formatter: '{title|Beecreative}\n{desc|Aug 2021 - Jul 2023}',
                  rich: {
                     title: {
                        color: '#00D492',
                        fontSize: 15,
                        fontWeight: 'bold',
                        padding: [6, 0],
                     },
                     desc: { color: '#aaa', fontSize: 12 },
                  },
               },
            },
            {
               value: [2, 2],
               symbolSize: 30,
               label: {
                  show: true,
                  position: 'top',
                  formatter: '{title|Contents.com}\n{desc|Jul 2023 - Apr 2024}',
                  rich: {
                     title: {
                        color: '#00D492',
                        fontSize: 15,
                        fontWeight: 'bold',
                        padding: [6, 0],
                     },
                     desc: { color: '#aaa', fontSize: 12 },
                  },
               },
            },
            [3, 1],
            {
               value: [4, 1],
               symbolSize: 30,
               label: {
                  show: true,
                  position: 'top',
                  formatter: '{title|3Caravelle}\n{desc|Apr 2024 - Now}',
                  rich: {
                     title: {
                        color: '#00D492',
                        fontSize: 15,
                        fontWeight: 'bold',
                        padding: [6, 0],
                     },
                     desc: { color: '#aaa', fontSize: 12 },
                  },
               },
            },
         ],
         type: 'line',
      },
      {
         symbolSize: 0,
         smooth: true,
         lineStyle: {
            width: 10,
         },
         itemStyle: {
            color: '#00D492',
         },
         data: [
            [1, 2],
            [2, 2],
            {
               value: [3, 2],
               symbol: 'circle',
               symbolSize: 30,
            },
         ],
         type: 'line',
      },
   ],
};
