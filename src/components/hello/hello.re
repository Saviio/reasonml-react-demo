module Hello = {

  open External;

  let reLogo = require("./img/logo.png");
  let styles = require("./style/hello.styl");

  let handleClick = fun (_evt: ReactEventRe.Mouse.t) =>
    Js.log("Clicked");

  let make _ => {
    ...sfc("Hello"),
    render: fun _ =>
      <div>
        <img src=(reLogo) />
        <div onClick=(handleClick) className=(styles##title)>
          ( "Hello World" |> toText )
        </div>
      </div>
  };

  [%bs.raw{|
    console.log('Hello ReasonML React')
  |}];

}
