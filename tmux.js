function window_base(id) {
  // Configuration.
  var svg_width = 500;
  var svg_height = 280;
  var bottom_bar_height = 10;
  var width = svg_width;
  var height = svg_height - bottom_bar_height;
  var terminal_text_height = 11;
  var terminal_text_margin_left = 2;
  var pane_border_bg_width = 6;
  var pane_border_fg_width = 1;

  var s = Snap(id);

  // Terminal backround.
  var terminal_background = s.rect(0, 0, svg_width, svg_height);
  terminal_background.attr({id:"terminal_background"});

  // Pane borders.
  var top_pane_bg = s.line(width/2, 0, width/2, height/2);
  top_pane_bg.addClass("pane-border-bg");
  var bottom_pane_bg = s.line(width/2, height/2, width/2, height);
  bottom_pane_bg.addClass("pane-active-border-bg");
  var right_pane_bg = s.line(width/2-pane_border_bg_width/2,
                                  height/2, width, height/2);
  right_pane_bg.addClass("pane-active-border-bg");
  s.group(top_pane_bg, bottom_pane_bg, right_pane_bg).attr({
    strokeWidth: pane_border_bg_width
  });

  var top_pane_fg = s.line(width/2, 0, width/2, height/2);
  top_pane_fg.addClass("pane-border-fg");
  var bottom_pane_fg = s.line(width/2, height/2, width/2, height);
  bottom_pane_fg.addClass("pane-active-border-fg");
  var right_pane_fg = s.line(width/2, height/2, width, height/2);
  right_pane_fg.addClass("pane-active-border-fg");
  s.group(top_pane_fg, bottom_pane_fg, right_pane_fg).attr({
    strokeWidth: pane_border_fg_width
  });

  // Clock
  var clock = s.text(width*3/4, height/4, "12:34");
  clock.addClass("clock-mode-colour");
  clock.attr({
    textAnchor:"middle",
    alignmentBaseline:"central",
  });

  // Text.
  var text = [
    "Sam I am",
    "I am Sam",
    "Sam I am",
    "That Sam-I-am!",
    "That Sam-I-am!",
    "I do not like that Sam-I-am!",
    "Do you like ",
    "green eggs and ham?",
    "I do not like them, Sam-I-am.",
    "I do not like",
    "green eggs and ham.",
    "Would you like them ",
    "here or there?",
    "I would not like them",
    "here or there.",
    "I would not like them anywhere.",
    "I do not like",
    "green eggs and ham.",
    "I do not like them, Sam-I-am.",
    "Would you like them in a house?",
    "Would you like them with a mouse?",
    "Sam and fox in box",
    "I do not like them",
    "in a house.",
  ];
  for (var i = 0; i < text.length; ++i) {
    var x = terminal_text_margin_left;
    var y = terminal_text_height * (i + 1);
    s.text(x, y, text[i]).addClass("terminal_text");
  }

  // Bottom bar
  var bottom_bar = s.rect(0, height, width, bottom_bar_height);
  bottom_bar.attr({id:"bottom_bar"});

  return s;
}

function normal_window() {
  var s = window_base("#normal_window");
}

function command_window() {
  // TODO(mwhittaker):
}

function main() {
  normal_window();
  command_window();
}

window.onload = main
