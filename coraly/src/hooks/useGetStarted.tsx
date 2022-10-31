import useTheme from "@mui/material/styles/useTheme";

const useGetStarted = () => {
  const theme = useTheme();

  return [
    {
      path: "/login",
      geometricShapes: [
        {
          type: "circle",
          data: {
            width: "34%",
            aspectRatio: "1/1",
            inset: "-6.5% auto auto -11.7%",
            left: "-103px",
            color: theme.palette.primary.main,
            radius: "50%",
          },
        },
        {
          type: "ellipse",
          data: {
            width: "34%",
            aspectRatio: "2/1",
            inset: "auto auto 10% 0",
            color: "#CE69FE",
            radius: "38vw 38vw 0 0",
            angle: "-30deg",
          },
        },
        {
          type: "triangle",
          data: {
            width: "32%",
            height: "27%",
            inset: "2% 0 auto auto",
            fill: theme.palette.info.main,
            angle: "45deg",
          },
        },

        {
          type: "ellipse",
          data: {
            width: "42%",
            aspectRatio: "3/1",
            inset: "auto 0 0 auto",
            color: theme.palette.secondary.main,
            radius: "25%/75%",
            angle: "-15deg",
          },
        },
        {
          type: "mesh",
          data: {
            circleWidth: "0.42vw",
            color: theme.palette.grey[100].toString(),
            total: 272,
            columns: 17,
            spacing: "10px",
            inset: ["25%", "auto", "auto", "30%"],
          },
        },
      ],
    },
  ];
};

export default useGetStarted;
