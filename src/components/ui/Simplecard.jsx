import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function areAllPropertiesUndefined(obj) {
  return Object.values(obj).every((value) => value === undefined);
}

export function SimpleCard({ info }) {
  let songinfo = {
    name: "default",
  };
  if (!areAllPropertiesUndefined(info)) {
    songinfo = info;
  }
  console.log(songinfo);

  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {info.song}
        </Typography>
        <Typography>{info.artist}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/song/${info.song}`} state={{ info }}>
          <Button>Plus Info</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
