import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import getProblemData from "./getProblemData";

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // width: "23.7rem",
    width: "25%",
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

async function restoreData() {
  try {
    const localData = await JSON.parse(localStorage.getItem("atcoder"));
    const res = await getProblemData(localData);
    return res;
  } catch (e) {
    return [];
  }
}

export default function CenteredGrid() {
  const [Items, changeItems] = React.useState([]);

  React.useEffect(() => {
    let unmounted = false;

    //非同期無名関数の即時呼び出し
    (async () => {
      //非同期でデータを取得
      const result = await restoreData();

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
      <Grid item xs={3}>
        <Card className={classes.root}>
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = item.Url;
            }}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {item.Id}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.Name}
              </Typography>
              <Typography color="textSecondary">メモ</Typography>
            </CardContent>
          </Button>
        </Card>
      </Grid>
    ));
  }
  return (
    <Grid container spacing={3}>
      <CardList items={Items} />;
    </Grid>
  );
}
