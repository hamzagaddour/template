export class TopClient {
  public static topClient = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    series: [
      {
        data: [
          {
            x: "Client A",
            y: 10,
          },
          {
            x: "Client B",
            y: 18,
          },
          {
            x: "Client C",
            y: 13,
          },
          {
            x: "Client D",
            y: 20,
          },
        ],
      },
    ],
  };
}
