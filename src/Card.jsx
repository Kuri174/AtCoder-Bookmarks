import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import getProblemData from "./getProblemData";

const useStyles = makeStyles({
  root: {
    // width: "23.7rem",
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const [Items, changeItems] = React.useState([]);

  React.useEffect(() => {
    let unmounted = false;

    //非同期無名関数の即時呼び出し
    (async () => {
      //非同期でデータを取得
      const result = await getProblemData();
      //アンマウントされていなければステートを更新
      if (!unmounted) {
        changeItems(result);
      }
    })();

    //クリーンアップ関数を返す
    return () => {
      unmounted = true;
    };
  }, []);

  function CardList({ items }) { 
    const classes = useStyles();
    return items.map((item) => (
      <Card className={classes.root}>
        <Button
          variant="contained"
          onClick={() => {
            window.location.href = item.problemUrl;
          }}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {item.contestId}
            </Typography>
            <Typography variant="h5" component="h2">
              {item.problemName}
            </Typography>
            <Typography color="textSecondary">adjective</Typography>
            <Typography variant="body2" component="p">
              {item.userName}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>メモ</CardActions>
        </Button>
      </Card>
    ));
  }
  return <CardList items={Items} />;
}
