import useTheme from "@mui/material/styles/useTheme";

const useGetStarted = () => {
  const theme = useTheme();

  return [
    {
      path: "/login",
      geometricShapes: [
        {
          width: "305px",
          height: "305px",
          top: "-60px",
          left: "-103px",
          background: theme.palette.primary.main,
          radius: "50%",
        },
        {
          width: "280px",
          height: "140px",
          top: "560px",
          left: "40px",
          background: "#CE69FE",
          radius: "280px 280px 0 0",
          angle: "-30deg",
        },
      ],
    },
  ];
};

export default useGetStarted;
