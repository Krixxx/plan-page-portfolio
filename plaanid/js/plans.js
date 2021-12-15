//All navigation, date, cookie, scroll and sidebar code
(function () {
  // navbar and sidebar
  const navBtn = document.querySelector('#nav-btn');
  const closeBtn = document.querySelector('#close-btn');
  const sidebar = document.querySelector('#sidebar');
  const body = document.querySelector('#main');

  // ********** set date ************
  // select span
  const date = (document.getElementById('date').innerHTML =
    new Date().getFullYear());

  // ********** cookie control ****************
  (function () {
    // check for cookie at page load
    const cookieBar = document.querySelector('.cookie-banner');

    window.onload = checkCookie();

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = 'expires=' + d.toUTCString();
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    function getCookie(cname) {
      var name = cname + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }

    function checkCookie() {
      var accepted = getCookie('hariduse-cookies-accepted');

      if (accepted === 'true') {
        cookieBar.classList.remove('cookie-banner-enabled');
      } else {
        cookieBar.classList.add('cookie-banner-enabled');
      }
    }

    //set cookie when accepted
    const acceptCookieBtn = document.querySelector('.cookie-accept-btn');

    acceptCookieBtn.addEventListener('click', function () {
      setCookie('hariduse-cookies-accepted', 'true', 30);
      cookieBar.classList.remove('cookie-banner-enabled');
    });
  })();

  // ************************nav buttons and sidebar****************************

  navBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.add('show-sidebar');
  });
  closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
  });

  //close sidebar when it is open and anywhere is clicked
  body.addEventListener('click', function () {
    if (sidebar.classList.contains('show-sidebar')) {
      sidebar.classList.remove('show-sidebar');
    }
  });
})();

// All table code
(function () {
  //apartment list
  const apartmentList = [
    {
      apartment: 1,
      floor: 1,
      rooms: 4,
      area: 82.5,
      loft: '-',
      balcony: 17,
      price: '149900 €',
      img: './img/apts/apt_1.jpg',
    },
    {
      apartment: 2,
      floor: 1,
      rooms: 2,
      area: 50.3,
      loft: '-',
      balcony: 17,
      price: '99500 €',
      img: './img/apts/apt_2.jpg',
    },
    {
      apartment: 3,
      floor: 1,
      rooms: 2,
      area: 40.8,
      loft: '-',
      balcony: '-',
      price: '70500 €',
      img: './img/apts/apt_3.jpg',
    },
    {
      apartment: 4,
      floor: 2,
      rooms: 2,
      area: 40,
      loft: '-',
      balcony: '-',
      price: 'Broneeritud',
      img: './img/apts/apt_4.jpg',
    },
    {
      apartment: 5,
      floor: 2,
      rooms: 2,
      area: 41.6,
      loft: '-',
      balcony: 17,
      price: '82500 €',
      img: './img/apts/apt_5.jpg',
    },
    {
      apartment: 6,
      floor: 2,
      rooms: 2,
      area: 45.4,
      loft: '-',
      balcony: 17,
      price: '90500 €',
      img: './img/apts/apt_6.jpg',
    },
    {
      apartment: 7,
      floor: 2,
      rooms: 2,
      area: 45.2,
      loft: '-',
      balcony: '-',
      price: '82500 €',
      img: './img/apts/apt_7.jpg',
    },
    {
      apartment: 8,
      floor: 3,
      rooms: 2,
      area: 54.7,
      loft: 14.2,
      balcony: '-',
      price: '98400 €',
      img: './img/apts/apt_8.jpg',
    },
    {
      apartment: 9,
      floor: 3,
      rooms: 2,
      area: 55.8,
      loft: 14.6,
      balcony: 10,
      price: '105900 €',
      img: './img/apts/apt_9.jpg',
    },
    {
      apartment: 10,
      floor: 3,
      rooms: 3,
      area: 65.3,
      loft: 12.6,
      balcony: 17,
      price: '124900 €',
      img: './img/apts/apt_10.jpg',
    },
    {
      apartment: 11,
      floor: 3,
      rooms: 2,
      area: 57.5,
      loft: 11.9,
      balcony: '-',
      price: '105400 €',
      img: './img/apts/apt_11.jpg',
    },
    {
      apartment: 12,
      floor: 1,
      rooms: 2,
      area: 43.4,
      loft: '-',
      balcony: '-',
      price: '75500 €',
      img: './img/apts/apt_12.jpg',
    },
    {
      apartment: 13,
      floor: 1,
      rooms: 2,
      area: 35.7,
      loft: '-',
      balcony: '-',
      price: '66900 €',
      img: './img/apts/apt_13.jpg',
    },
    {
      apartment: 14,
      floor: 1,
      rooms: 2,
      area: 46.2,
      loft: '-',
      balcony: '-',
      price: '82500 €',
      img: './img/apts/apt_14.jpg',
    },
    {
      apartment: 15,
      floor: 1,
      rooms: 3,
      area: 52.1,
      loft: '-',
      balcony: '-',
      price: '89500 €',
      img: './img/apts/apt_15.jpg',
    },
    {
      apartment: 16,
      floor: 2,
      rooms: 1,
      area: 35.7,
      loft: 8.3,
      balcony: '-',
      price: '68900 €',
      img: './img/apts/apt_16.jpg',
    },
    {
      apartment: 17,
      floor: 2,
      rooms: 1,
      area: 47.7,
      loft: 10.2,
      balcony: '-',
      price: '87500 €',
      img: './img/apts/apt_17.jpg',
    },
    {
      apartment: 18,
      floor: 2,
      rooms: 2,
      area: 66.8,
      loft: 23.7,
      balcony: '-',
      price: '119500 €',
      img: './img/apts/apt_18.jpg',
    },
    {
      apartment: 19,
      floor: 2,
      rooms: 1,
      area: 40.5,
      loft: 12.6,
      balcony: '-',
      price: '67500 €',
      img: './img/apts/apt_19.jpg',
    },
    {
      apartment: 20,
      floor: 2,
      rooms: 2,
      area: 53.5,
      loft: '-',
      balcony: '-',
      price: '99500 €',
      img: './img/apts/apt_20.jpg',
    },
    {
      apartment: 21,
      floor: 3,
      rooms: 1,
      area: 24.3,
      loft: '-',
      balcony: '-',
      price: '46900 €',
      img: './img/apts/apt_21.jpg',
    },
    {
      apartment: 22,
      floor: 3,
      rooms: 1,
      area: 31.2,
      loft: '-',
      balcony: '-',
      price: '56900 €',
      img: './img/apts/apt_22.jpg',
    },
    {
      apartment: 23,
      floor: 3,
      rooms: 3,
      area: 58,
      loft: '-',
      balcony: '-',
      price: '105300 €',
      img: './img/apts/apt_23.jpg',
    },
    {
      apartment: 24,
      floor: 3,
      rooms: 2,
      area: 66.9,
      loft: 15.8,
      balcony: '-',
      price: '127500 €',
      img: './img/apts/apt_24.jpg',
    },
    {
      apartment: 25,
      floor: 'sokkel',
      rooms: 3,
      area: 181.1,
      loft: '-',
      balcony: '-',
      price: 'Broneeritud',
      img: './img/apts/apt_25.jpg',
    },
    {
      apartment: 26,
      floor: 'sokkel',
      rooms: 2,
      area: 50,
      loft: '-',
      balcony: '-',
      price: '95500 €',
      img: './img/apts/apt_26.jpg',
    },
  ];
  // load table
  const tableRows = document.querySelector('.table-body');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const floorPlans = document.querySelectorAll('.floor');

  //Load items
  window.addEventListener('DOMContentLoaded', function () {
    displayTableContents(apartmentList);
    loadClickEventsForTable();
    loadTableSorting();
  });

  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var floor = e.currentTarget.dataset.id;

      showCorrectPlan(floor);

      if (floor === '1') {
        floor = 1;
      } else if (floor === '2') {
        floor = 2;
      } else if (floor === '3') {
        floor = 3;
      }

      filterBtns.forEach(function (btn) {
        btn.classList.remove('active-selected-floor');
      });

      document.querySelectorAll('th').forEach((th) => {
        th.classList.remove('th-sort-asc', 'th-sort-desc');
      });

      btn.classList.add('active-selected-floor');
      const floorSelected = apartmentList.filter(function (floorItem) {
        if (floorItem.floor === floor) {
          return floorItem;
        }
      });
      if (floor === 'all') {
        displayTableContents(apartmentList);
      } else {
        displayTableContents(floorSelected);
      }
      loadClickEventsForTable();
    });
  });

  function showCorrectPlan(floorId) {
    floorPlans.forEach(function (floors) {
      floors.classList.remove('show-floor-plan');
    });

    if (floorId === 'all') {
      document.querySelectorAll('.floor').forEach(function (item) {
        item.classList.add('show-floor-plan');
      });
    } else {
      document
        .getElementById(floorId + '-floor')
        .classList.add('show-floor-plan');
    }
  }

  function loadTableSorting() {
    document.querySelectorAll('.table-sortable th').forEach((headerCell) => {
      headerCell.addEventListener('click', () => {
        const tableElement =
          headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(
          headerCell.parentElement.children,
          headerCell
        );
        const currentIsAscending = headerCell.classList.contains('th-sort-asc');

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
      });
    });
  }

  function loadClickEventsForTable() {
    const apartments = document.querySelectorAll('.rida');

    // add mouveover and mouseout event listeners to lines, so hover effect will be added to the plan
    apartments.forEach(function (item) {
      item.addEventListener('mouseover', function (event) {
        const id = event.target.parentElement.classList[1].split('-')[1];
        hover(id);
      });
    });
    apartments.forEach(function (item) {
      item.addEventListener('mouseout', function (event) {
        const id = event.target.parentElement.classList[1].split('-')[1];
        noHover(id);
      });
    });
    // add click eventlistener to lines
    apartments.forEach(function (item) {
      item.addEventListener('click', function (event) {
        const apartment = event.target.parentElement.classList[1].split('-')[1];
        openInfo(apartment);
      });
    });
  }

  // Get all lines and plan apartments
  const plans = document.querySelectorAll('.plan');

  // add mouveover and mouseout event listeners to plan, so hover effect will be added to lines
  plans.forEach(function (item) {
    item.addEventListener('mouseover', function (event) {
      const id = event.target.id.split('-')[1];
      lineHover(id);
    });
  });
  plans.forEach(function (item) {
    item.addEventListener('mouseout', function (event) {
      const id = event.target.id.split('-')[1];
      lineNoHover(id);
    });
  });
  // add click eventlistener to plan
  plans.forEach(function (item) {
    item.addEventListener('click', function (event) {
      const apartment = event.target.id.split('-')[1];
      openInfo(apartment);
    });
  });
  // add hover effect to plan
  function hover(id) {
    document.getElementById('plan-' + id).classList.add('hovered-plan');
  }
  // remove hover effect from plan
  function noHover(id) {
    document.getElementById('plan-' + id).classList.remove('hovered-plan');
  }
  // add hover effect to line
  function lineHover(id) {
    document.getElementById('rida-' + id).classList.add('hovered-rida');
  }
  //remove hover effect from line
  function lineNoHover(id) {
    document.getElementById('rida-' + id).classList.remove('hovered-rida');
  }
  // display table contents from array

  function displayTableContents(apartmentListItems) {
    let displayApartments = apartmentListItems.map(function (item) {
      // console.log(item);

      return `<tr class="rida krt-${item.apartment}" id="rida-${item.apartment}">
                <td>${item.apartment}</td>
                <td>${item.floor}</td>
                <td>${item.rooms}</td>
                <td>${item.area}</td>
                <td>${item.loft}</td>
                <td>${item.balcony}</td>
                <td>${item.price}</td>
              </tr>`;
    });

    displayApartments = displayApartments.join('');

    tableRows.innerHTML = displayApartments;
  }

  function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll('tr'));
    var sortedRows = Array.from(tBody.querySelectorAll('tr'));

    // Sort each row
    if ((column === 4) | (column === 5)) {
      sortedRows = rows.sort((a, b) => {
        const aColText = parseInt(
          a
            .querySelector(`td:nth-child(${column + 1})`)
            .textContent.trim()
            .replace('-', '0')
        );
        const bColText = parseInt(
          b
            .querySelector(`td:nth-child(${column + 1})`)
            .textContent.trim()
            .replace('-', '0')
        );

        return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
      });
    } else {
      sortedRows = rows.sort((a, b) => {
        const aColText = parseFloat(
          a
            .querySelector(`td:nth-child(${column + 1})`)
            .textContent.trim()
            .replace('Broneeritud', '1000000')
            .replace('sokkel', '0')
        );
        const bColText = parseFloat(
          b
            .querySelector(`td:nth-child(${column + 1})`)
            .textContent.trim()
            .replace('Broneeritud', '1000000')
            .replace('sokkel', '0')
        );

        return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
      });
    }

    //remove all existing TRs from the table
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Rememeber how the column is currently sorted
    table
      .querySelectorAll('th')
      .forEach((th) => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table
      .querySelector(`th:nth-child(${column + 1})`)
      .classList.toggle('th-sort-asc', asc);
    table
      .querySelector(`th:nth-child(${column + 1})`)
      .classList.toggle('th-sort-desc', !asc);
  }

  // Modal operations
  var modal = document.querySelector('.backdrop');
  var modalCloseBtn = document.querySelector('#apt-close-btn');

  var aptNumber = document.querySelector('#apt-number');
  var apartmentPlan = document.querySelector('#apt-plan');

  // // when item is clicked, open information modal
  function openInfo(apartment) {
    apartmentPlan.src = '';
    var apartmentHeader = 'Sokolaadi 22 - ' + apartment;
    aptNumber.textContent = apartmentHeader;
    apartmentPlan.src = apartmentList[apartment - 1].img;

    modal.classList.add('open-modal');
  }
  modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('open-modal');
  });
})();
