type stylus 'a = Js.t('a);

let sfc = ReasonReact.statelessComponent;
let toText = ReasonReact.stringToElement;

external require : string => _ = "require" [@@bs.val];
