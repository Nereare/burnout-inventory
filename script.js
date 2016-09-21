/*
 * This file is part of Burnout Inventory.
 *
 * Burnout Inventory is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Burnout Inventory is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Burnout Inventory.  If not, see <http://www.gnu.org/licenses/>.
 */

const APP_TITLE    = "Burnout Self-Test";
const APP_VERSION  = "1.0.0-beta";
const APP_AUTHOR   = "Igor Padoim";
const APP_AUTHLINK = "https://github.com/Nereare";
const APP_LINK     = "";
const APP_LICENSE  = "GNU General Public License Version 3";
const APP_LICLINK  = "https://www.gnu.org/licenses/gpl-3.0.en.html";
const APP_COPYYEAR = "2016";

// Runs when the page finishes loading.
$(function () {
  // Replaces title tag and dummy-spans for the APP_TITLE constant.
  $("title").text(APP_TITLE);
  $("span.app-title").each(function(){
    $(this).text(APP_TITLE);
  });

  // Replaces copyright dummy class with the copyright notice itself.
  $("*.app-copyright").each(function() {
    $(this).html("Copyright &copy; " + APP_COPYYEAR + " <a href=\"" + APP_AUTHLINK + "\">" + APP_AUTHOR + "</a>");
  });
  // And the license dummy class as well.
  $("*.app-license").each(function() {
    $(this).html("Licensed under the <a href=\"" + APP_LICLINK + "\">" + APP_LICENSE + "</a>");
  });
  $("a.get-license").each(function() {
    $(this).attr("href", APP_LICLINK);
    $(this).html(APP_LICENSE);
  });
  $("a.get-liclink").each(function() {
    $(this).attr("href", APP_LICLINK);
  });
  // And, lastly, all the about dummy classes.
  $("a.about-app").each(function() {
    $(this).attr("href", APP_LINK);
    $(this).html("GitHub Repository");
  });
  $("a.about-version").each(function() {
    $(this).attr("href", "#");
    $(this).html("Version " + APP_VERSION);
  });
  $("a.about-author").each(function() {
    $(this).attr("href", APP_AUTHLINK);
    $(this).html("By " + APP_AUTHOR);
  });
  $("a.about-license").each(function() {
    $(this).attr("href", APP_LICLINK);
    $(this).html(APP_LICENSE);
  });

  $("#calculate").on(
    "click",
    function() {
      var dummy = [
        "Low-level burnout",
        "Moderate burnout",
        "High-level burnout"];

      var res   = [ "", "", ""];
      var css   = [ "", "", ""];
      var total = [ 0, 0, 0];

      $("input[type=radio][name*=A]:checked").each(function() {
        total[0] += parseInt($(this).val());
      });
      $("input[type=radio][name*=B]:checked").each(function() {
        total[1] += parseInt($(this).val());
      });
      $("input[type=radio][name*=C]:checked").each(function() {
        total[2] += parseInt($(this).val());
      });

      if(total[0] <= 17 ) {
        res[0] = dummy[0];
        css[0] = "low";
      } else if (total <= 29) {
        res[0] = dummy[1];
        css[0] = "mew";
      } else {
        res[0] = dummy[2];
        css[0] = "hi";
      }
      if(total[1] <= 5 ) {
        res[1] = dummy[0];
        css[1] = "low";
      } else if (total <= 11) {
        res[1] = dummy[1];
        css[1] = "med";
      } else {
        res[1] = dummy[2];
        css[1] = "hi";
      }
      if(total[2] <= 33 ) {
        res[2] = dummy[2];
        css[2] = "hi";
      } else if (total <= 39) {
        res[2] = dummy[1];
        css[2] = "mew";
      } else {
        res[2] = dummy[0];
        css[2] = "low";
      }

      $("#resultA").html("<h5>Score: " + total[0] + "</h5><p>" + res[0] + "</p>");
      $("#resultA-card").removeClass("hidden").addClass(css[0]);
      $("#resultB").html("<h5>Score: " + total[1] + "</h5><p>" + res[1] + "</p>");
      $("#resultB-card").removeClass("hidden").addClass(css[1]);
      $("#resultC").html("<h5>Score: " + total[2] + "</h5><p>" + res[2] + "</p>");
      $("#resultC-card").removeClass("hidden").addClass(css[2]);
    }
  );
});
