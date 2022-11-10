import useTheme from "@mui/material/styles/useTheme";

const useGetStarted = () => {
  const theme = useTheme();

  return [
    {
      path: "/login",
      backgroundColor: "#F6F8FA",
      width: "61%",
      heading: {
        color: theme.palette.grey[900],
        inset: "41% auto auto 19.5%",
      },
      geometricShapes: [
        {
          type: "circle",
          data: {
            width: "34%",
            aspectRatio: "1/1",
            inset: "-12% auto auto -12%",
            color: theme.palette.primary.main,
            radius: "50%",
          },
        },
        {
          type: "ellipse",
          data: {
            width: "30%",
            aspectRatio: "2/1",
            inset: "auto auto 10% 0",
            color: theme.palette.heliotrope.main,
            radius: "38vw 38vw 0 0",
            angle: "-30deg",
          },
        },
        {
          type: "triangle",
          data: {
            width: "32%",
            height: "27%",
            inset: "2% -20% auto auto",
            fill: theme.palette.info.main,
            angle: "45deg",
          },
        },

        {
          type: "ellipse",
          data: {
            width: "42%",
            aspectRatio: "3/1",
            inset: "auto -2% -2% auto",
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
            inset: ["27%", "auto", "auto", "30%"],
          },
        },
      ],
    },
    {
      path: "/signup",
      backgroundColor: "#2ccfbc1a",
      width: "54%",
      heading: {
        color: theme.palette.grey.A100,
        inset: "48% auto auto 12.8%",
      },
      geometricShapes: [
        {
          type: "circle",
          data: {
            width: "21%",
            aspectRatio: "1/1",
            inset: "7.2% auto auto -4.4%",
            color: theme.palette.heliotrope.main,
            radius: "50%",
          },
        },
        {
          type: "ellipse",
          data: {
            width: "26%",
            aspectRatio: "2/1",
            inset: "auto 0 6% auto",
            color: theme.palette.info.main,
            radius: "0 0 50vw 50vw",
            angle: "-45deg",
          },
        },
        {
          type: "triangle",
          data: {
            width: "32%",
            height: "27%",
            inset: "80% auto auto 6%",
            fill: theme.palette.secondary.main,
            angle: "45deg",
          },
        },

        {
          type: "ellipse",
          data: {
            width: "42%",
            aspectRatio: "3/1",
            inset: "-6% 9% auto auto",
            color: theme.palette.primary.main,
            radius: "25%/75%",
            angle: "-135deg",
          },
        },
        {
          type: "mesh",
          data: {
            circleWidth: "0.42vw",
            color: theme.palette.common.white,
            total: 272,
            columns: 17,
            spacing: "10px",
            inset: ["35.6%", "auto", "auto", "18%"],
          },
        },
      ],
    },
    {
      path: "/reset-password",
      backgroundColor: "#f93e6c1a",
      width: "61%",
      heading: {
        color: theme.palette.grey.A100,
        inset: "35% auto auto 21.5%",
      },
      geometricShapes: [
        {
          type: "circle",
          data: {
            width: "30%",
            aspectRatio: "1/1",
            inset: "auto auto -8% 5%",
            color: theme.palette.info.main,
            radius: "50%",
          },
        },
        {
          type: "ellipse",
          data: {
            width: "30%",
            aspectRatio: "2/1",
            inset: "auto -9% 9% auto",
            color: theme.palette.heliotrope.main,
            radius: " 50vw 50vw 0 0 ",
            angle: "-30deg",
          },
        },
        {
          type: "triangle",
          data: {
            width: "32%",
            height: "27%",
            inset: "8% -10% auto auto",
            fill: theme.palette.secondary.main,
            angle: "165deg",
          },
        },

        {
          type: "ellipse",
          data: {
            width: "42%",
            aspectRatio: "3/1",
            inset: "6% auto auto -12.5%",
            color: theme.palette.primary.main,
            radius: "25%/75%",
            angle: "-15deg",
          },
        },
        {
          type: "mesh",
          data: {
            circleWidth: "0.42vw",
            color: theme.palette.common.white,
            total: 272,
            columns: 17,
            spacing: "10px",
            inset: ["38%", "auto", "auto", "55%"],
          },
        },
      ],
    },
  ];
};

export default useGetStarted;
