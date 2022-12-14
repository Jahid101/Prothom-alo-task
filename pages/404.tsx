import { Result, Button } from "antd";
import Router from "next/router";

export default function Custom404() {
  return (
    <div className="text-center mt-30">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              Router.push("/");
            }}
            type="primary"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
}
