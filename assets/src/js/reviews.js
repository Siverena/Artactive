'use strict';
var multiItemSlider = (function() {
  return function(selector, config) {
    var
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.reviews__list'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.reviews__item'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.slider__btn'), // элементы управления
      _sliderControlLeft = _mainElement.querySelector('.slider__btn--prev'), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector('.slider__btn--next'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)  Изначально рассчитывается в процентак
      // _step = _itemWidth, // величина шага (для трансформации), меняем на пиксели
      _items = []; // массив элементов

    console.log(_step);
    console.log(_sliderControlLeft);
    console.log(_sliderControlRight);

    // наполнение массива _items
    _sliderItems.forEach(function(item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: _items.length - 1,
    }
    var _transformItem = function(direction) {
      if (direction === 'right') {
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
          console.log(_positionLeftItem + "+" + _wrapperWidth + "/" + _itemWidth + "-" + "1" + "=" + (_positionLeftItem + _wrapperWidth / _itemWidth - 1));
          console.log(position.getMax);
          return;
        }
        if (!_sliderControlLeft.classList.contains('popular-btn_show')) {
          _sliderControlLeft.classList.add('popular-btn_show');
        }
        if (_sliderControlRight.classList.contains('popular-btn_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
          _sliderControlRight.classList.remove('popular-btn_show');
        }
        _positionLeftItem++;
        _transform -= _step;

      }
      if (direction === 'left') {
        if (_positionLeftItem <= position.getMin) {

          return;
        }
        if (!_sliderControlRight.classList.contains('popular-btn_show')) {
          _sliderControlRight.classList.add('popular-btn_show');
        }
        if (_sliderControlLeft.classList.contains('popular-btn_show') && _positionLeftItem - 1 <= position.getMin) {
          _sliderControlLeft.classList.remove('popular-btn_show');
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед" 
    var _controlClick = function(e) {

      if (e.target.classList.contains('slider__btn')) {
        console.log("привет");
        e.preventDefault();
        var direction = e.target.classList.contains('slider__btn--next') ? 'right' : 'left';
        _transformItem(direction);
      }
    };

    var _setUpListeners = function() {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function(item) {

        item.addEventListener('click', _controlClick);
      });
    }

    // инициализация
    _setUpListeners();

    return {
      right: function() { // метод right
        _transformItem('right');
      },
      left: function() { // метод left
        _transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.reviews')