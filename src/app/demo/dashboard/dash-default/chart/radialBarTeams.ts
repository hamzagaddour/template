export class RadialBarTeams {
  public static radialBarTeams = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67, 84, 97, 61],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
  }
}
