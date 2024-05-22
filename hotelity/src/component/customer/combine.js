/*!
 * Chart.js v3.7.0
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */

const combine = {


if (typeof $.easing !== 'undefined') {
	$.easing['jswing'] = $.easing['swing'];
}

var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + .75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + .9375;
	} else {
		return n1*(x-=(2.625/d1))*x + .984375;
	}
}

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x) {
		return $.easing[$.easing.def](x);
	},
	easeInQuad: function (x) {
		return x * x;
	},
	easeOutQuad: function (x) {
		return 1 - ( 1 - x ) * ( 1 - x );
	},
	easeInOutQuad: function (x) {
		return x < 0.5 ?
			2 * x * x :
			1 - pow( -2 * x + 2, 2 ) / 2;
	},
	easeInCubic: function (x) {
		return x * x * x;
	},
	easeOutCubic: function (x) {
		return 1 - pow( 1 - x, 3 );
	},
	easeInOutCubic: function (x) {
		return x < 0.5 ?
			4 * x * x * x :
			1 - pow( -2 * x + 2, 3 ) / 2;
	},
	easeInQuart: function (x) {
		return x * x * x * x;
	},
	easeOutQuart: function (x) {
		return 1 - pow( 1 - x, 4 );
	},
	easeInOutQuart: function (x) {
		return x < 0.5 ?
			8 * x * x * x * x :
			1 - pow( -2 * x + 2, 4 ) / 2;
	},
	easeInQuint: function (x) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x) {
		return 1 - pow( 1 - x, 5 );
	},
	easeInOutQuint: function (x) {
		return x < 0.5 ?
			16 * x * x * x * x * x :
			1 - pow( -2 * x + 2, 5 ) / 2;
	},
	easeInSine: function (x) {
		return 1 - cos( x * PI/2 );
	},
	easeOutSine: function (x) {
		return sin( x * PI/2 );
	},
	easeInOutSine: function (x) {
		return -( cos( PI * x ) - 1 ) / 2;
	},
	easeInExpo: function (x) {
		return x === 0 ? 0 : pow( 2, 10 * x - 10 );
	},
	easeOutExpo: function (x) {
		return x === 1 ? 1 : 1 - pow( 2, -10 * x );
	},
	easeInOutExpo: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			pow( 2, 20 * x - 10 ) / 2 :
			( 2 - pow( 2, -20 * x + 10 ) ) / 2;
	},
	easeInCirc: function (x) {
		return 1 - sqrt( 1 - pow( x, 2 ) );
	},
	easeOutCirc: function (x) {
		return sqrt( 1 - pow( x - 1, 2 ) );
	},
	easeInOutCirc: function (x) {
		return x < 0.5 ?
			( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
			( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
	},
	easeInElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
	},
	easeOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
	},
	easeInOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
			pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
	},
	easeInBack: function (x) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x) {
		return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
	},
	easeInOutBack: function (x) {
		return x < 0.5 ?
			( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
			( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	},
	easeInBounce: function (x) {
		return 1 - bounceOut( 1 - x );
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x) {
		return x < 0.5 ?
			( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
			( 1 + bounceOut( 2 * x - 1 ) ) / 2;
	}
});



/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);


if (typeof jQuery === 'undefined') {
    throw new Error('Tempus Dominus Bootstrap4\'s requires jQuery. jQuery must be included before Tempus Dominus Bootstrap4\'s JavaScript.');
  }
  
  +function ($) {
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((version[0] < 2 && version[1] < 9) || (version[0] === 1 && version[1] === 9 && version[2] < 1) || (version[0] >= 4)) {
      throw new Error('Tempus Dominus Bootstrap4\'s requires at least jQuery v3.0.0 but less than v4.0.0');
    }
  }(jQuery);
  
  
  if (typeof moment === 'undefined') {
    throw new Error('Tempus Dominus Bootstrap4\'s requires moment.js. Moment.js must be included before Tempus Dominus Bootstrap4\'s JavaScript.');
  }
  
  var version = moment.version.split('.')
  if ((version[0] <= 2 && version[1] < 17) || (version[0] >= 3)) {
    throw new Error('Tempus Dominus Bootstrap4\'s requires at least moment.js v2.17.0 but less than v3.0.0');
  }
  
  +function () {
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  // ReSharper disable once InconsistentNaming
  var DateTimePicker = function ($, moment) {
      // ReSharper disable InconsistentNaming
      var NAME = 'datetimepicker',
          DATA_KEY = '' + NAME,
          EVENT_KEY = '.' + DATA_KEY,
          DATA_API_KEY = '.data-api',
          Selector = {
          DATA_TOGGLE: '[data-toggle="' + DATA_KEY + '"]'
      },
          ClassName = {
          INPUT: NAME + '-input'
      },
          Event = {
          CHANGE: 'change' + EVENT_KEY,
          BLUR: 'blur' + EVENT_KEY,
          KEYUP: 'keyup' + EVENT_KEY,
          KEYDOWN: 'keydown' + EVENT_KEY,
          FOCUS: 'focus' + EVENT_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
          //emitted
          UPDATE: 'update' + EVENT_KEY,
          ERROR: 'error' + EVENT_KEY,
          HIDE: 'hide' + EVENT_KEY,
          SHOW: 'show' + EVENT_KEY
      },
          DatePickerModes = [{
          CLASS_NAME: 'days',
          NAV_FUNCTION: 'M',
          NAV_STEP: 1
      }, {
          CLASS_NAME: 'months',
          NAV_FUNCTION: 'y',
          NAV_STEP: 1
      }, {
          CLASS_NAME: 'years',
          NAV_FUNCTION: 'y',
          NAV_STEP: 10
      }, {
          CLASS_NAME: 'decades',
          NAV_FUNCTION: 'y',
          NAV_STEP: 100
      }],
          KeyMap = {
          'up': 38,
          38: 'up',
          'down': 40,
          40: 'down',
          'left': 37,
          37: 'left',
          'right': 39,
          39: 'right',
          'tab': 9,
          9: 'tab',
          'escape': 27,
          27: 'escape',
          'enter': 13,
          13: 'enter',
          'pageUp': 33,
          33: 'pageUp',
          'pageDown': 34,
          34: 'pageDown',
          'shift': 16,
          16: 'shift',
          'control': 17,
          17: 'control',
          'space': 32,
          32: 'space',
          't': 84,
          84: 't',
          'delete': 46,
          46: 'delete'
      },
          ViewModes = ['times', 'days', 'months', 'years', 'decades'],
          keyState = {},
          keyPressHandled = {};
  
      var Default = {
          timeZone: '',
          format: false,
          dayViewHeaderFormat: 'MMMM YYYY',
          extraFormats: false,
          stepping: 1,
          minDate: false,
          maxDate: false,
          useCurrent: true,
          collapse: true,
          locale: moment.locale(),
          defaultDate: false,
          disabledDates: false,
          enabledDates: false,
          icons: {
              time: 'fa fa-clock-o',
              date: 'fa fa-calendar',
              up: 'fa fa-arrow-up',
              down: 'fa fa-arrow-down',
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-calendar-check-o',
              clear: 'fa fa-delete',
              close: 'fa fa-times'
          },
          tooltips: {
              today: 'Go to today',
              clear: 'Clear selection',
              close: 'Close the picker',
              selectMonth: 'Select Month',
              prevMonth: 'Previous Month',
              nextMonth: 'Next Month',
              selectYear: 'Select Year',
              prevYear: 'Previous Year',
              nextYear: 'Next Year',
              selectDecade: 'Select Decade',
              prevDecade: 'Previous Decade',
              nextDecade: 'Next Decade',
              prevCentury: 'Previous Century',
              nextCentury: 'Next Century',
              pickHour: 'Pick Hour',
              incrementHour: 'Increment Hour',
              decrementHour: 'Decrement Hour',
              pickMinute: 'Pick Minute',
              incrementMinute: 'Increment Minute',
              decrementMinute: 'Decrement Minute',
              pickSecond: 'Pick Second',
              incrementSecond: 'Increment Second',
              decrementSecond: 'Decrement Second',
              togglePeriod: 'Toggle Period',
              selectTime: 'Select Time',
              selectDate: 'Select Date'
          },
          useStrict: false,
          sideBySide: false,
          daysOfWeekDisabled: false,
          calendarWeeks: false,
          viewMode: 'days',
          toolbarPlacement: 'default',
          buttons: {
              showToday: false,
              showClear: false,
              showClose: false
          },
          widgetPositioning: {
              horizontal: 'auto',
              vertical: 'auto'
          },
          widgetParent: null,
          ignoreReadonly: false,
          keepOpen: false,
          focusOnShow: true,
          inline: false,
          keepInvalid: false,
          keyBinds: {
              up: function up() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().subtract(7, 'd'));
                  } else {
                      this.date(d.clone().add(this.stepping(), 'm'));
                  }
                  return true;
              },
              down: function down() {
                  if (!this.widget) {
                      this.show();
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().add(7, 'd'));
                  } else {
                      this.date(d.clone().subtract(this.stepping(), 'm'));
                  }
                  return true;
              },
              'control up': function controlUp() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().subtract(1, 'y'));
                  } else {
                      this.date(d.clone().add(1, 'h'));
                  }
                  return true;
              },
              'control down': function controlDown() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().add(1, 'y'));
                  } else {
                      this.date(d.clone().subtract(1, 'h'));
                  }
                  return true;
              },
              left: function left() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().subtract(1, 'd'));
                  }
                  return true;
              },
              right: function right() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().add(1, 'd'));
                  }
                  return true;
              },
              pageUp: function pageUp() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().subtract(1, 'M'));
                  }
                  return true;
              },
              pageDown: function pageDown() {
                  if (!this.widget) {
                      return false;
                  }
                  var d = this._dates[0] || this.getMoment();
                  if (this.widget.find('.datepicker').is(':visible')) {
                      this.date(d.clone().add(1, 'M'));
                  }
                  return true;
              },
              enter: function enter() {
                  if (!this.widget) {
                      return false;
                  }
                  this.hide();
                  return true;
              },
              escape: function escape() {
                  if (!this.widget) {
                      return false;
                  }
                  this.hide();
                  return true;
              },
              'control space': function controlSpace() {
                  if (!this.widget) {
                      return false;
                  }
                  if (this.widget.find('.timepicker').is(':visible')) {
                      this.widget.find('.btn[data-action="togglePeriod"]').click();
                  }
                  return true;
              },
              t: function t() {
                  if (!this.widget) {
                      return false;
                  }
                  this.date(this.getMoment());
                  return true;
              },
              'delete': function _delete() {
                  if (!this.widget) {
                      return false;
                  }
                  this.clear();
                  return true;
              }
          },
          debug: false,
          allowInputToggle: false,
          disabledTimeIntervals: false,
          disabledHours: false,
          enabledHours: false,
          viewDate: false,
          allowMultidate: false,
          multidateSeparator: ','
      };
  
      // ReSharper restore InconsistentNaming
  
      // ReSharper disable once DeclarationHides
      // ReSharper disable once InconsistentNaming
  
      var DateTimePicker = function () {
          /** @namespace eData.dateOptions */
          /** @namespace moment.tz */
  
          function DateTimePicker(element, options) {
              _classCallCheck(this, DateTimePicker);
  
              this._options = this._getOptions(options);
              this._element = element;
              this._dates = [];
              this._datesFormatted = [];
              this._viewDate = null;
              this.unset = true;
              this.component = false;
              this.widget = false;
              this.use24Hours = null;
              this.actualFormat = null;
              this.parseFormats = null;
              this.currentViewMode = null;
              this.MinViewModeNumber = 0;
  
              this._int();
          }
  
          /**
           * @return {string}
           */
  
  
          //private
  
          DateTimePicker.prototype._int = function _int() {
              var targetInput = this._element.data('target-input');
              if (this._element.is('input')) {
                  this.input = this._element;
              } else if (targetInput !== undefined) {
                  if (targetInput === 'nearest') {
                      this.input = this._element.find('input');
                  } else {
                      this.input = $(targetInput);
                  }
              }
  
              this._dates = [];
              this._dates[0] = this.getMoment();
              this._viewDate = this.getMoment().clone();
  
              $.extend(true, this._options, this._dataToOptions());
  
              this.options(this._options);
  
              this._initFormatting();
  
              if (this.input !== undefined && this.input.is('input') && this.input.val().trim().length !== 0) {
                  this._setValue(this._parseInputDate(this.input.val().trim()), 0);
              } else if (this._options.defaultDate && this.input !== undefined && this.input.attr('placeholder') === undefined) {
                  this._setValue(this._options.defaultDate, 0);
              }
              if (this._options.inline) {
                  this.show();
              }
          };
  
          DateTimePicker.prototype._update = function _update() {
              if (!this.widget) {
                  return;
              }
              this._fillDate();
              this._fillTime();
          };
  
          DateTimePicker.prototype._setValue = function _setValue(targetMoment, index) {
              var oldDate = this.unset ? null : this._dates[index];
              var outpValue = '';
              // case of calling setValue(null or false)
              if (!targetMoment) {
                  if (!this._options.allowMultidate || this._dates.length === 1) {
                      this.unset = true;
                      this._dates = [];
                      this._datesFormatted = [];
                  } else {
                      outpValue = this._element.data('date') + ',';
                      outpValue = outpValue.replace(oldDate.format(this.actualFormat) + ',', '').replace(',,', '').replace(/,\s*$/, '');
                      this._dates.splice(index, 1);
                      this._datesFormatted.splice(index, 1);
                  }
                  if (this.input !== undefined) {
                      this.input.val(outpValue);
                      this.input.trigger('input');
                  }
                  this._element.data('date', outpValue);
                  this._notifyEvent({
                      type: DateTimePicker.Event.CHANGE,
                      date: false,
                      oldDate: oldDate
                  });
                  this._update();
                  return;
              }
  
              targetMoment = targetMoment.clone().locale(this._options.locale);
  
              if (this._hasTimeZone()) {
                  targetMoment.tz(this._options.timeZone);
              }
  
              if (this._options.stepping !== 1) {
                  targetMoment.minutes(Math.round(targetMoment.minutes() / this._options.stepping) * this._options.stepping).seconds(0);
              }
  
              if (this._isValid(targetMoment)) {
                  this._dates[index] = targetMoment;
                  this._datesFormatted[index] = targetMoment.format('YYYY-MM-DD');
                  this._viewDate = targetMoment.clone();
                  if (this._options.allowMultidate && this._dates.length > 1) {
                      for (var i = 0; i < this._dates.length; i++) {
                          outpValue += '' + this._dates[i].format(this.actualFormat) + this._options.multidateSeparator;
                      }
                      outpValue = outpValue.replace(/,\s*$/, '');
                  } else {
                      outpValue = this._dates[index].format(this.actualFormat);
                  }
                  if (this.input !== undefined) {
                      this.input.val(outpValue);
                      this.input.trigger('input');
                  }
                  this._element.data('date', outpValue);
  
                  this.unset = false;
                  this._update();
                  this._notifyEvent({
                      type: DateTimePicker.Event.CHANGE,
                      date: this._dates[index].clone(),
                      oldDate: oldDate
                  });
              } else {
                  if (!this._options.keepInvalid) {
                      if (this.input !== undefined) {
                          this.input.val('' + (this.unset ? '' : this._dates[index].format(this.actualFormat)));
                          this.input.trigger('input');
                      }
                  } else {
                      this._notifyEvent({
                          type: DateTimePicker.Event.CHANGE,
                          date: targetMoment,
                          oldDate: oldDate
                      });
                  }
                  this._notifyEvent({
                      type: DateTimePicker.Event.ERROR,
                      date: targetMoment,
                      oldDate: oldDate
                  });
              }
          };
  
          DateTimePicker.prototype._change = function _change(e) {
              var val = $(e.target).val().trim(),
                  parsedDate = val ? this._parseInputDate(val) : null;
              this._setValue(parsedDate);
              e.stopImmediatePropagation();
              return false;
          };
  
          //noinspection JSMethodCanBeStatic
  
  
          DateTimePicker.prototype._getOptions = function _getOptions(options) {
              options = $.extend(true, {}, Default, options);
              return options;
          };
  
          DateTimePicker.prototype._hasTimeZone = function _hasTimeZone() {
              return moment.tz !== undefined && this._options.timeZone !== undefined && this._options.timeZone !== null && this._options.timeZone !== '';
          };
  
          DateTimePicker.prototype._isEnabled = function _isEnabled(granularity) {
              if (typeof granularity !== 'string' || granularity.length > 1) {
                  throw new TypeError('isEnabled expects a single character string parameter');
              }
              switch (granularity) {
                  case 'y':
                      return this.actualFormat.indexOf('Y') !== -1;
                  case 'M':
                      return this.actualFormat.indexOf('M') !== -1;
                  case 'd':
                      return this.actualFormat.toLowerCase().indexOf('d') !== -1;
                  case 'h':
                  case 'H':
                      return this.actualFormat.toLowerCase().indexOf('h') !== -1;
                  case 'm':
                      return this.actualFormat.indexOf('m') !== -1;
                  case 's':
                      return this.actualFormat.indexOf('s') !== -1;
                  case 'a':
                  case 'A':
                      return this.actualFormat.toLowerCase().indexOf('a') !== -1;
                  default:
                      return false;
              }
          };
  
          DateTimePicker.prototype._hasTime = function _hasTime() {
              return this._isEnabled('h') || this._isEnabled('m') || this._isEnabled('s');
          };
  
          DateTimePicker.prototype._hasDate = function _hasDate() {
              return this._isEnabled('y') || this._isEnabled('M') || this._isEnabled('d');
          };
  
          DateTimePicker.prototype._dataToOptions = function _dataToOptions() {
              var eData = this._element.data();
              var dataOptions = {};
  
              if (eData.dateOptions && eData.dateOptions instanceof Object) {
                  dataOptions = $.extend(true, dataOptions, eData.dateOptions);
              }
  
              $.each(this._options, function (key) {
                  var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1); //todo data api key
                  if (eData[attributeName] !== undefined) {
                      dataOptions[key] = eData[attributeName];
                  } else {
                      delete dataOptions[key];
                  }
              });
              return dataOptions;
          };
  
          DateTimePicker.prototype._notifyEvent = function _notifyEvent(e) {
              if (e.type === DateTimePicker.Event.CHANGE && (e.date && e.date.isSame(e.oldDate)) || !e.date && !e.oldDate) {
                  return;
              }
              this._element.trigger(e);
          };
  
          DateTimePicker.prototype._viewUpdate = function _viewUpdate(e) {
              if (e === 'y') {
                  e = 'YYYY';
              }
              this._notifyEvent({
                  type: DateTimePicker.Event.UPDATE,
                  change: e,
                  viewDate: this._viewDate.clone()
              });
          };
  
          DateTimePicker.prototype._showMode = function _showMode(dir) {
              if (!this.widget) {
                  return;
              }
              if (dir) {
                  this.currentViewMode = Math.max(this.MinViewModeNumber, Math.min(3, this.currentViewMode + dir));
              }
              this.widget.find('.datepicker > div').hide().filter('.datepicker-' + DatePickerModes[this.currentViewMode].CLASS_NAME).show();
          };
  
          DateTimePicker.prototype._isInDisabledDates = function _isInDisabledDates(testDate) {
              return this._options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
          };
  
          DateTimePicker.prototype._isInEnabledDates = function _isInEnabledDates(testDate) {
              return this._options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
          };
  
          DateTimePicker.prototype._isInDisabledHours = function _isInDisabledHours(testDate) {
              return this._options.disabledHours[testDate.format('H')] === true;
          };
  
          DateTimePicker.prototype._isInEnabledHours = function _isInEnabledHours(testDate) {
              return this._options.enabledHours[testDate.format('H')] === true;
          };
  
          DateTimePicker.prototype._isValid = function _isValid(targetMoment, granularity) {
              if (!targetMoment.isValid()) {
                  return false;
              }
              if (this._options.disabledDates && granularity === 'd' && this._isInDisabledDates(targetMoment)) {
                  return false;
              }
              if (this._options.enabledDates && granularity === 'd' && !this._isInEnabledDates(targetMoment)) {
                  return false;
              }
              if (this._options.minDate && targetMoment.isBefore(this._options.minDate, granularity)) {
                  return false;
              }
              if (this._options.maxDate && targetMoment.isAfter(this._options.maxDate, granularity)) {
                  return false;
              }
              if (this._options.daysOfWeekDisabled && granularity === 'd' && this._options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                  return false;
              }
              if (this._options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && this._isInDisabledHours(targetMoment)) {
                  return false;
              }
              if (this._options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !this._isInEnabledHours(targetMoment)) {
                  return false;
              }
              if (this._options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                  var found = false;
                  $.each(this._options.disabledTimeIntervals, function () {
                      if (targetMoment.isBetween(this[0], this[1])) {
                          found = true;
                          return false;
                      }
                  });
                  if (found) {
                      return false;
                  }
              }
              return true;
          };
  
          DateTimePicker.prototype._parseInputDate = function _parseInputDate(inputDate) {
              if (this._options.parseInputDate === undefined) {
                  if (!moment.isMoment(inputDate)) {
                      inputDate = this.getMoment(inputDate);
                  }
              } else {
                  inputDate = this._options.parseInputDate(inputDate);
              }
              //inputDate.locale(this.options.locale);
              return inputDate;
          };
  
          DateTimePicker.prototype._keydown = function _keydown(e) {
              var handler = null,
                  index = void 0,
                  index2 = void 0,
                  keyBindKeys = void 0,
                  allModifiersPressed = void 0;
              var pressedKeys = [],
                  pressedModifiers = {},
                  currentKey = e.which,
                  pressed = 'p';
  
              keyState[currentKey] = pressed;
  
              for (index in keyState) {
                  if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                      pressedKeys.push(index);
                      if (parseInt(index, 10) !== currentKey) {
                          pressedModifiers[index] = true;
                      }
                  }
              }
  
              for (index in this._options.keyBinds) {
                  if (this._options.keyBinds.hasOwnProperty(index) && typeof this._options.keyBinds[index] === 'function') {
                      keyBindKeys = index.split(' ');
                      if (keyBindKeys.length === pressedKeys.length && KeyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                          allModifiersPressed = true;
                          for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                              if (!(KeyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                  allModifiersPressed = false;
                                  break;
                              }
                          }
                          if (allModifiersPressed) {
                              handler = this._options.keyBinds[index];
                              break;
                          }
                      }
                  }
              }
  
              if (handler) {
                  if (handler.call(this)) {
                      e.stopPropagation();
                      e.preventDefault();
                  }
              }
          };
  
          //noinspection JSMethodCanBeStatic,SpellCheckingInspection
  
  
          DateTimePicker.prototype._keyup = function _keyup(e) {
              keyState[e.which] = 'r';
              if (keyPressHandled[e.which]) {
                  keyPressHandled[e.which] = false;
                  e.stopPropagation();
                  e.preventDefault();
              }
          };
  
          DateTimePicker.prototype._indexGivenDates = function _indexGivenDates(givenDatesArray) {
              // Store given enabledDates and disabledDates as keys.
              // This way we can check their existence in O(1) time instead of looping through whole array.
              // (for example: options.enabledDates['2014-02-27'] === true)
              var givenDatesIndexed = {},
                  self = this;
              $.each(givenDatesArray, function () {
                  var dDate = self._parseInputDate(this);
                  if (dDate.isValid()) {
                      givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                  }
              });
              return Object.keys(givenDatesIndexed).length ? givenDatesIndexed : false;
          };
  
          DateTimePicker.prototype._indexGivenHours = function _indexGivenHours(givenHoursArray) {
              // Store given enabledHours and disabledHours as keys.
              // This way we can check their existence in O(1) time instead of looping through whole array.
              // (for example: options.enabledHours['2014-02-27'] === true)
              var givenHoursIndexed = {};
              $.each(givenHoursArray, function () {
                  givenHoursIndexed[this] = true;
              });
              return Object.keys(givenHoursIndexed).length ? givenHoursIndexed : false;
          };
  
          DateTimePicker.prototype._initFormatting = function _initFormatting() {
              var format = this._options.format || 'L LT',
                  self = this;
  
              this.actualFormat = format.replace(/(\[[^\[]*])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
                  return self._dates[0].localeData().longDateFormat(formatInput) || formatInput; //todo taking the first date should be ok
              });
  
              this.parseFormats = this._options.extraFormats ? this._options.extraFormats.slice() : [];
              if (this.parseFormats.indexOf(format) < 0 && this.parseFormats.indexOf(this.actualFormat) < 0) {
                  this.parseFormats.push(this.actualFormat);
              }
  
              this.use24Hours = this.actualFormat.toLowerCase().indexOf('a') < 1 && this.actualFormat.replace(/\[.*?]/g, '').indexOf('h') < 1;
  
              if (this._isEnabled('y')) {
                  this.MinViewModeNumber = 2;
              }
              if (this._isEnabled('M')) {
                  this.MinViewModeNumber = 1;
              }
              if (this._isEnabled('d')) {
                  this.MinViewModeNumber = 0;
              }
  
              this.currentViewMode = Math.max(this.MinViewModeNumber, this.currentViewMode);
  
              if (!this.unset) {
                  this._setValue(this._dates[0], 0);
              }
          };
  
          DateTimePicker.prototype._getLastPickedDate = function _getLastPickedDate() {
              return this._dates[this._getLastPickedDateIndex()];
          };
  
          DateTimePicker.prototype._getLastPickedDateIndex = function _getLastPickedDateIndex() {
              return this._dates.length - 1;
          };
  
          //public
  
  
          DateTimePicker.prototype.getMoment = function getMoment(d) {
              var returnMoment = void 0;
  
              if (d === undefined || d === null) {
                  returnMoment = moment(); //TODO should this use format? and locale?
              } else if (this._hasTimeZone()) {
                  // There is a string to parse and a default time zone
                  // parse with the tz function which takes a default time zone if it is not in the format string
                  returnMoment = moment.tz(d, this.parseFormats, this._options.locale, this._options.useStrict, this._options.timeZone);
              } else {
                  returnMoment = moment(d, this.parseFormats, this._options.locale, this._options.useStrict);
              }
  
              if (this._hasTimeZone()) {
                  returnMoment.tz(this._options.timeZone);
              }
  
              return returnMoment;
          };
  
          DateTimePicker.prototype.toggle = function toggle() {
              return this.widget ? this.hide() : this.show();
          };
  
          DateTimePicker.prototype.ignoreReadonly = function ignoreReadonly(_ignoreReadonly) {
              if (arguments.length === 0) {
                  return this._options.ignoreReadonly;
              }
              if (typeof _ignoreReadonly !== 'boolean') {
                  throw new TypeError('ignoreReadonly () expects a boolean parameter');
              }
              this._options.ignoreReadonly = _ignoreReadonly;
          };
  
          DateTimePicker.prototype.options = function options(newOptions) {
              if (arguments.length === 0) {
                  return $.extend(true, {}, this._options);
              }
  
              if (!(newOptions instanceof Object)) {
                  throw new TypeError('options() this.options parameter should be an object');
              }
              $.extend(true, this._options, newOptions);
              var self = this;
              $.each(this._options, function (key, value) {
                  if (self[key] !== undefined) {
                      self[key](value);
                  }
              });
          };
  
          DateTimePicker.prototype.date = function date(newDate, index) {
              index = index || 0;
              if (arguments.length === 0) {
                  if (this.unset) {
                      return null;
                  }
                  if (this._options.allowMultidate) {
                      return this._dates.join(this._options.multidateSeparator);
                  } else {
                      return this._dates[index].clone();
                  }
              }
  
              if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                  throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
              }
  
              this._setValue(newDate === null ? null : this._parseInputDate(newDate), index);
          };
  
          DateTimePicker.prototype.format = function format(newFormat) {
              if (arguments.length === 0) {
                  return this._options.format;
              }
  
              if (typeof newFormat !== 'string' && (typeof newFormat !== 'boolean' || newFormat !== false)) {
                  throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
              }
  
              this._options.format = newFormat;
              if (this.actualFormat) {
                  this._initFormatting(); // reinitialize formatting
              }
          };
  
          DateTimePicker.prototype.timeZone = function timeZone(newZone) {
              if (arguments.length === 0) {
                  return this._options.timeZone;
              }
  
              if (typeof newZone !== 'string') {
                  throw new TypeError('newZone() expects a string parameter');
              }
  
              this._options.timeZone = newZone;
          };
  
          DateTimePicker.prototype.dayViewHeaderFormat = function dayViewHeaderFormat(newFormat) {
              if (arguments.length === 0) {
                  return this._options.dayViewHeaderFormat;
              }
  
              if (typeof newFormat !== 'string') {
                  throw new TypeError('dayViewHeaderFormat() expects a string parameter');
              }
  
              this._options.dayViewHeaderFormat = newFormat;
          };
  
          DateTimePicker.prototype.extraFormats = function extraFormats(formats) {
              if (arguments.length === 0) {
                  return this._options.extraFormats;
              }
  
              if (formats !== false && !(formats instanceof Array)) {
                  throw new TypeError('extraFormats() expects an array or false parameter');
              }
  
              this._options.extraFormats = formats;
              if (this.parseFormats) {
                  this._initFormatting(); // reinit formatting
              }
          };
  
          DateTimePicker.prototype.disabledDates = function disabledDates(dates) {
              if (arguments.length === 0) {
                  return this._options.disabledDates ? $.extend({}, this._options.disabledDates) : this._options.disabledDates;
              }
  
              if (!dates) {
                  this._options.disabledDates = false;
                  this._update();
                  return true;
              }
              if (!(dates instanceof Array)) {
                  throw new TypeError('disabledDates() expects an array parameter');
              }
              this._options.disabledDates = this._indexGivenDates(dates);
              this._options.enabledDates = false;
              this._update();
          };
  
          DateTimePicker.prototype.enabledDates = function enabledDates(dates) {
              if (arguments.length === 0) {
                  return this._options.enabledDates ? $.extend({}, this._options.enabledDates) : this._options.enabledDates;
              }
  
              if (!dates) {
                  this._options.enabledDates = false;
                  this._update();
                  return true;
              }
              if (!(dates instanceof Array)) {
                  throw new TypeError('enabledDates() expects an array parameter');
              }
              this._options.enabledDates = this._indexGivenDates(dates);
              this._options.disabledDates = false;
              this._update();
          };
  
          DateTimePicker.prototype.daysOfWeekDisabled = function daysOfWeekDisabled(_daysOfWeekDisabled) {
              if (arguments.length === 0) {
                  return this._options.daysOfWeekDisabled.splice(0);
              }
  
              if (typeof _daysOfWeekDisabled === 'boolean' && !_daysOfWeekDisabled) {
                  this._options.daysOfWeekDisabled = false;
                  this._update();
                  return true;
              }
  
              if (!(_daysOfWeekDisabled instanceof Array)) {
                  throw new TypeError('daysOfWeekDisabled() expects an array parameter');
              }
              this._options.daysOfWeekDisabled = _daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
                  currentValue = parseInt(currentValue, 10);
                  if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                      return previousValue;
                  }
                  if (previousValue.indexOf(currentValue) === -1) {
                      previousValue.push(currentValue);
                  }
                  return previousValue;
              }, []).sort();
              if (this._options.useCurrent && !this._options.keepInvalid) {
                  for (var i = 0; i < this._dates.length; i++) {
                      var tries = 0;
                      while (!this._isValid(this._dates[i], 'd')) {
                          this._dates[i].add(1, 'd');
                          if (tries === 31) {
                              throw 'Tried 31 times to find a valid date';
                          }
                          tries++;
                      }
                      this._setValue(this._dates[i], i);
                  }
              }
              this._update();
          };
  
          DateTimePicker.prototype.maxDate = function maxDate(_maxDate) {
              if (arguments.length === 0) {
                  return this._options.maxDate ? this._options.maxDate.clone() : this._options.maxDate;
              }
  
              if (typeof _maxDate === 'boolean' && _maxDate === false) {
                  this._options.maxDate = false;
                  this._update();
                  return true;
              }
  
              if (typeof _maxDate === 'string') {
                  if (_maxDate === 'now' || _maxDate === 'moment') {
                      _maxDate = this.getMoment();
                  }
              }
  
              var parsedDate = this._parseInputDate(_maxDate);
  
              if (!parsedDate.isValid()) {
                  throw new TypeError('maxDate() Could not parse date parameter: ' + _maxDate);
              }
              if (this._options.minDate && parsedDate.isBefore(this._options.minDate)) {
                  throw new TypeError('maxDate() date parameter is before this.options.minDate: ' + parsedDate.format(this.actualFormat));
              }
              this._options.maxDate = parsedDate;
              for (var i = 0; i < this._dates.length; i++) {
                  if (this._options.useCurrent && !this._options.keepInvalid && this._dates[i].isAfter(_maxDate)) {
                      this._setValue(this._options.maxDate, i);
                  }
              }
              if (this._viewDate.isAfter(parsedDate)) {
                  this._viewDate = parsedDate.clone().subtract(this._options.stepping, 'm');
              }
              this._update();
          };
  
          DateTimePicker.prototype.minDate = function minDate(_minDate) {
              if (arguments.length === 0) {
                  return this._options.minDate ? this._options.minDate.clone() : this._options.minDate;
              }
  
              if (typeof _minDate === 'boolean' && _minDate === false) {
                  this._options.minDate = false;
                  this._update();
                  return true;
              }
  
              if (typeof _minDate === 'string') {
                  if (_minDate === 'now' || _minDate === 'moment') {
                      _minDate = this.getMoment();
                  }
              }
  
              var parsedDate = this._parseInputDate(_minDate);
  
              if (!parsedDate.isValid()) {
                  throw new TypeError('minDate() Could not parse date parameter: ' + _minDate);
              }
              if (this._options.maxDate && parsedDate.isAfter(this._options.maxDate)) {
                  throw new TypeError('minDate() date parameter is after this.options.maxDate: ' + parsedDate.format(this.actualFormat));
              }
              this._options.minDate = parsedDate;
              for (var i = 0; i < this._dates.length; i++) {
                  if (this._options.useCurrent && !this._options.keepInvalid && this._dates[i].isBefore(_minDate)) {
                      this._setValue(this._options.minDate, i);
                  }
              }
              if (this._viewDate.isBefore(parsedDate)) {
                  this._viewDate = parsedDate.clone().add(this._options.stepping, 'm');
              }
              this._update();
          };
  
          DateTimePicker.prototype.defaultDate = function defaultDate(_defaultDate) {
              if (arguments.length === 0) {
                  return this._options.defaultDate ? this._options.defaultDate.clone() : this._options.defaultDate;
              }
              if (!_defaultDate) {
                  this._options.defaultDate = false;
                  return true;
              }
  
              if (typeof _defaultDate === 'string') {
                  if (_defaultDate === 'now' || _defaultDate === 'moment') {
                      _defaultDate = this.getMoment();
                  } else {
                      _defaultDate = this.getMoment(_defaultDate);
                  }
              }
  
              var parsedDate = this._parseInputDate(_defaultDate);
              if (!parsedDate.isValid()) {
                  throw new TypeError('defaultDate() Could not parse date parameter: ' + _defaultDate);
              }
              if (!this._isValid(parsedDate)) {
                  throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
              }
  
              this._options.defaultDate = parsedDate;
  
              if (this._options.defaultDate && this._options.inline || this.input !== undefined && this.input.val().trim() === '') {
                  this._setValue(this._options.defaultDate, 0);
              }
          };
  
          DateTimePicker.prototype.locale = function locale(_locale) {
              if (arguments.length === 0) {
                  return this._options.locale;
              }
  
              if (!moment.localeData(_locale)) {
                  throw new TypeError('locale() locale ' + _locale + ' is not loaded from moment locales!');
              }
  
              this._options.locale = _locale;
  
              for (var i = 0; i < this._dates.length; i++) {
                  this._dates[i].locale(this._options.locale);
              }
              this._viewDate.locale(this._options.locale);
  
              if (this.actualFormat) {
                  this._initFormatting(); // reinitialize formatting
              }
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          DateTimePicker.prototype.stepping = function stepping(_stepping) {
              if (arguments.length === 0) {
                  return this._options.stepping;
              }
  
              _stepping = parseInt(_stepping, 10);
              if (isNaN(_stepping) || _stepping < 1) {
                  _stepping = 1;
              }
              this._options.stepping = _stepping;
          };
  
          DateTimePicker.prototype.useCurrent = function useCurrent(_useCurrent) {
              var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
              if (arguments.length === 0) {
                  return this._options.useCurrent;
              }
  
              if (typeof _useCurrent !== 'boolean' && typeof _useCurrent !== 'string') {
                  throw new TypeError('useCurrent() expects a boolean or string parameter');
              }
              if (typeof _useCurrent === 'string' && useCurrentOptions.indexOf(_useCurrent.toLowerCase()) === -1) {
                  throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
              }
              this._options.useCurrent = _useCurrent;
          };
  
          DateTimePicker.prototype.collapse = function collapse(_collapse) {
              if (arguments.length === 0) {
                  return this._options.collapse;
              }
  
              if (typeof _collapse !== 'boolean') {
                  throw new TypeError('collapse() expects a boolean parameter');
              }
              if (this._options.collapse === _collapse) {
                  return true;
              }
              this._options.collapse = _collapse;
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          DateTimePicker.prototype.icons = function icons(_icons) {
              if (arguments.length === 0) {
                  return $.extend({}, this._options.icons);
              }
  
              if (!(_icons instanceof Object)) {
                  throw new TypeError('icons() expects parameter to be an Object');
              }
  
              $.extend(this._options.icons, _icons);
  
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          DateTimePicker.prototype.tooltips = function tooltips(_tooltips) {
              if (arguments.length === 0) {
                  return $.extend({}, this._options.tooltips);
              }
  
              if (!(_tooltips instanceof Object)) {
                  throw new TypeError('tooltips() expects parameter to be an Object');
              }
              $.extend(this._options.tooltips, _tooltips);
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          DateTimePicker.prototype.useStrict = function useStrict(_useStrict) {
              if (arguments.length === 0) {
                  return this._options.useStrict;
              }
  
              if (typeof _useStrict !== 'boolean') {
                  throw new TypeError('useStrict() expects a boolean parameter');
              }
              this._options.useStrict = _useStrict;
          };
  
          DateTimePicker.prototype.sideBySide = function sideBySide(_sideBySide) {
              if (arguments.length === 0) {
                  return this._options.sideBySide;
              }
  
              if (typeof _sideBySide !== 'boolean') {
                  throw new TypeError('sideBySide() expects a boolean parameter');
              }
              this._options.sideBySide = _sideBySide;
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          DateTimePicker.prototype.viewMode = function viewMode(_viewMode) {
              if (arguments.length === 0) {
                  return this._options.viewMode;
              }
  
              if (typeof _viewMode !== 'string') {
                  throw new TypeError('viewMode() expects a string parameter');
              }
  
              if (DateTimePicker.ViewModes.indexOf(_viewMode) === -1) {
                  throw new TypeError('viewMode() parameter must be one of (' + DateTimePicker.ViewModes.join(', ') + ') value');
              }
  
              this._options.viewMode = _viewMode;
              this.currentViewMode = Math.max(DateTimePicker.ViewModes.indexOf(_viewMode) - 1, this.MinViewModeNumber);
  
              this._showMode();
          };
  
          DateTimePicker.prototype.calendarWeeks = function calendarWeeks(_calendarWeeks) {
              if (arguments.length === 0) {
                  return this._options.calendarWeeks;
              }
  
              if (typeof _calendarWeeks !== 'boolean') {
                  throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
              }
  
              this._options.calendarWeeks = _calendarWeeks;
              this._update();
          };
  
          DateTimePicker.prototype.buttons = function buttons(_buttons) {
              if (arguments.length === 0) {
                  return $.extend({}, this._options.buttons);
              }
  
              if (!(_buttons instanceof Object)) {
                  throw new TypeError('buttons() expects parameter to be an Object');
              }
  
              $.extend(this._options.buttons, _buttons);
  
              if (typeof this._options.buttons.showToday !== 'boolean') {
                  throw new TypeError('buttons.showToday expects a boolean parameter');
              }
              if (typeof this._options.buttons.showClear !== 'boolean') {
                  throw new TypeError('buttons.showClear expects a boolean parameter');
              }
              if (typeof this._options.buttons.showClose !== 'boolean') {
                  throw new TypeError('buttons.showClose expects a boolean parameter');
              }
  
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          DateTimePicker.prototype.keepOpen = function keepOpen(_keepOpen) {
              if (arguments.length === 0) {
                  return this._options.keepOpen;
              }
  
              if (typeof _keepOpen !== 'boolean') {
                  throw new TypeError('keepOpen() expects a boolean parameter');
              }
  
              this._options.keepOpen = _keepOpen;
          };
  
          DateTimePicker.prototype.focusOnShow = function focusOnShow(_focusOnShow) {
              if (arguments.length === 0) {
                  return this._options.focusOnShow;
              }
  
              if (typeof _focusOnShow !== 'boolean') {
                  throw new TypeError('focusOnShow() expects a boolean parameter');
              }
  
              this._options.focusOnShow = _focusOnShow;
          };
  
          DateTimePicker.prototype.inline = function inline(_inline) {
              if (arguments.length === 0) {
                  return this._options.inline;
              }
  
              if (typeof _inline !== 'boolean') {
                  throw new TypeError('inline() expects a boolean parameter');
              }
  
              this._options.inline = _inline;
          };
  
          DateTimePicker.prototype.clear = function clear() {
              this._setValue(null); //todo
          };
  
          DateTimePicker.prototype.keyBinds = function keyBinds(_keyBinds) {
              if (arguments.length === 0) {
                  return this._options.keyBinds;
              }
  
              this._options.keyBinds = _keyBinds;
          };
  
          DateTimePicker.prototype.debug = function debug(_debug) {
              if (typeof _debug !== 'boolean') {
                  throw new TypeError('debug() expects a boolean parameter');
              }
  
              this._options.debug = _debug;
          };
  
          DateTimePicker.prototype.allowInputToggle = function allowInputToggle(_allowInputToggle) {
              if (arguments.length === 0) {
                  return this._options.allowInputToggle;
              }
  
              if (typeof _allowInputToggle !== 'boolean') {
                  throw new TypeError('allowInputToggle() expects a boolean parameter');
              }
  
              this._options.allowInputToggle = _allowInputToggle;
          };
  
          DateTimePicker.prototype.keepInvalid = function keepInvalid(_keepInvalid) {
              if (arguments.length === 0) {
                  return this._options.keepInvalid;
              }
  
              if (typeof _keepInvalid !== 'boolean') {
                  throw new TypeError('keepInvalid() expects a boolean parameter');
              }
              this._options.keepInvalid = _keepInvalid;
          };
  
          DateTimePicker.prototype.datepickerInput = function datepickerInput(_datepickerInput) {
              if (arguments.length === 0) {
                  return this._options.datepickerInput;
              }
  
              if (typeof _datepickerInput !== 'string') {
                  throw new TypeError('datepickerInput() expects a string parameter');
              }
  
              this._options.datepickerInput = _datepickerInput;
          };
  
          DateTimePicker.prototype.parseInputDate = function parseInputDate(_parseInputDate2) {
              if (arguments.length === 0) {
                  return this._options.parseInputDate;
              }
  
              if (typeof _parseInputDate2 !== 'function') {
                  throw new TypeError('parseInputDate() should be as function');
              }
  
              this._options.parseInputDate = _parseInputDate2;
          };
  
          DateTimePicker.prototype.disabledTimeIntervals = function disabledTimeIntervals(_disabledTimeIntervals) {
              if (arguments.length === 0) {
                  return this._options.disabledTimeIntervals ? $.extend({}, this._options.disabledTimeIntervals) : this._options.disabledTimeIntervals;
              }
  
              if (!_disabledTimeIntervals) {
                  this._options.disabledTimeIntervals = false;
                  this._update();
                  return true;
              }
              if (!(_disabledTimeIntervals instanceof Array)) {
                  throw new TypeError('disabledTimeIntervals() expects an array parameter');
              }
              this._options.disabledTimeIntervals = _disabledTimeIntervals;
              this._update();
          };
  
          DateTimePicker.prototype.disabledHours = function disabledHours(hours) {
              if (arguments.length === 0) {
                  return this._options.disabledHours ? $.extend({}, this._options.disabledHours) : this._options.disabledHours;
              }
  
              if (!hours) {
                  this._options.disabledHours = false;
                  this._update();
                  return true;
              }
              if (!(hours instanceof Array)) {
                  throw new TypeError('disabledHours() expects an array parameter');
              }
              this._options.disabledHours = this._indexGivenHours(hours);
              this._options.enabledHours = false;
              if (this._options.useCurrent && !this._options.keepInvalid) {
                  for (var i = 0; i < this._dates.length; i++) {
                      var tries = 0;
                      while (!this._isValid(this._dates[i], 'h')) {
                          this._dates[i].add(1, 'h');
                          if (tries === 24) {
                              throw 'Tried 24 times to find a valid date';
                          }
                          tries++;
                      }
                      this._setValue(this._dates[i], i);
                  }
              }
              this._update();
          };
  
          DateTimePicker.prototype.enabledHours = function enabledHours(hours) {
              if (arguments.length === 0) {
                  return this._options.enabledHours ? $.extend({}, this._options.enabledHours) : this._options.enabledHours;
              }
  
              if (!hours) {
                  this._options.enabledHours = false;
                  this._update();
                  return true;
              }
              if (!(hours instanceof Array)) {
                  throw new TypeError('enabledHours() expects an array parameter');
              }
              this._options.enabledHours = this._indexGivenHours(hours);
              this._options.disabledHours = false;
              if (this._options.useCurrent && !this._options.keepInvalid) {
                  for (var i = 0; i < this._dates.length; i++) {
                      var tries = 0;
                      while (!this._isValid(this._dates[i], 'h')) {
                          this._dates[i].add(1, 'h');
                          if (tries === 24) {
                              throw 'Tried 24 times to find a valid date';
                          }
                          tries++;
                      }
                      this._setValue(this._dates[i], i);
                  }
              }
              this._update();
          };
  
          DateTimePicker.prototype.viewDate = function viewDate(newDate) {
              if (arguments.length === 0) {
                  return this._viewDate.clone();
              }
  
              if (!newDate) {
                  this._viewDate = (this._dates[0] || this.getMoment()).clone();
                  return true;
              }
  
              if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                  throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
              }
  
              this._viewDate = this._parseInputDate(newDate);
              this._viewUpdate();
          };
  
          DateTimePicker.prototype.allowMultidate = function allowMultidate(_allowMultidate) {
              if (typeof _allowMultidate !== 'boolean') {
                  throw new TypeError('allowMultidate() expects a boolean parameter');
              }
  
              this._options.allowMultidate = _allowMultidate;
          };
  
          DateTimePicker.prototype.multidateSeparator = function multidateSeparator(_multidateSeparator) {
              if (arguments.length === 0) {
                  return this._options.multidateSeparator;
              }
  
              if (typeof _multidateSeparator !== 'string' || _multidateSeparator.length > 1) {
                  throw new TypeError('multidateSeparator expects a single character string parameter');
              }
  
              this._options.multidateSeparator = _multidateSeparator;
          };
  
          _createClass(DateTimePicker, null, [{
              key: 'NAME',
              get: function get() {
                  return NAME;
              }
  
              /**
               * @return {string}
               */
  
          }, {
              key: 'DATA_KEY',
              get: function get() {
                  return DATA_KEY;
              }
  
              /**
               * @return {string}
               */
  
          }, {
              key: 'EVENT_KEY',
              get: function get() {
                  return EVENT_KEY;
              }
  
              /**
               * @return {string}
               */
  
          }, {
              key: 'DATA_API_KEY',
              get: function get() {
                  return DATA_API_KEY;
              }
          }, {
              key: 'DatePickerModes',
              get: function get() {
                  return DatePickerModes;
              }
          }, {
              key: 'ViewModes',
              get: function get() {
                  return ViewModes;
              }
          }, {
              key: 'Event',
              get: function get() {
                  return Event;
              }
          }, {
              key: 'Selector',
              get: function get() {
                  return Selector;
              }
          }, {
              key: 'Default',
              get: function get() {
                  return Default;
              },
              set: function set(value) {
                  Default = value;
              }
          }, {
              key: 'ClassName',
              get: function get() {
                  return ClassName;
              }
          }]);
  
          return DateTimePicker;
      }();
  
      return DateTimePicker;
  }(jQuery, moment);
  
  //noinspection JSUnusedGlobalSymbols
  /* global DateTimePicker */
  var TempusDominusBootstrap4 = function ($) {
      // eslint-disable-line no-unused-vars
      // ReSharper disable once InconsistentNaming
      var JQUERY_NO_CONFLICT = $.fn[DateTimePicker.NAME],
          verticalModes = ['top', 'bottom', 'auto'],
          horizontalModes = ['left', 'right', 'auto'],
          toolbarPlacements = ['default', 'top', 'bottom'],
          getSelectorFromElement = function getSelectorFromElement($element) {
          var selector = $element.data('target'),
              $selector = void 0;
  
          if (!selector) {
              selector = $element.attr('href') || '';
              selector = /^#[a-z]/i.test(selector) ? selector : null;
          }
          $selector = $(selector);
          if ($selector.length === 0) {
              return $selector;
          }
  
          if (!$selector.data(DateTimePicker.DATA_KEY)) {
              $.extend({}, $selector.data(), $(this).data());
          }
  
          return $selector;
      };
  
      // ReSharper disable once InconsistentNaming
  
      var TempusDominusBootstrap4 = function (_DateTimePicker) {
          _inherits(TempusDominusBootstrap4, _DateTimePicker);
  
          function TempusDominusBootstrap4(element, options) {
              _classCallCheck(this, TempusDominusBootstrap4);
  
              var _this = _possibleConstructorReturn(this, _DateTimePicker.call(this, element, options));
  
              _this._init();
              return _this;
          }
  
          TempusDominusBootstrap4.prototype._init = function _init() {
              if (this._element.hasClass('input-group')) {
                  var datepickerButton = this._element.find('.datepickerbutton');
                  if (datepickerButton.length === 0) {
                      this.component = this._element.find('[data-toggle="datetimepicker"]');
                  } else {
                      this.component = datepickerButton;
                  }
              }
          };
  
          TempusDominusBootstrap4.prototype._getDatePickerTemplate = function _getDatePickerTemplate() {
              var headTemplate = $('<thead>').append($('<tr>').append($('<th>').addClass('prev').attr('data-action', 'previous').append($('<span>').addClass(this._options.icons.previous))).append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', '' + (this._options.calendarWeeks ? '6' : '5'))).append($('<th>').addClass('next').attr('data-action', 'next').append($('<span>').addClass(this._options.icons.next)))),
                  contTemplate = $('<tbody>').append($('<tr>').append($('<td>').attr('colspan', '' + (this._options.calendarWeeks ? '8' : '7'))));
  
              return [$('<div>').addClass('datepicker-days').append($('<table>').addClass('table table-sm').append(headTemplate).append($('<tbody>'))), $('<div>').addClass('datepicker-months').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), $('<div>').addClass('datepicker-years').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), $('<div>').addClass('datepicker-decades').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone()))];
          };
  
          TempusDominusBootstrap4.prototype._getTimePickerMainTemplate = function _getTimePickerMainTemplate() {
              var topRow = $('<tr>'),
                  middleRow = $('<tr>'),
                  bottomRow = $('<tr>');
  
              if (this._isEnabled('h')) {
                  topRow.append($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'title': this._options.tooltips.incrementHour
                  }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(this._options.icons.up))));
                  middleRow.append($('<td>').append($('<span>').addClass('timepicker-hour').attr({
                      'data-time-component': 'hours',
                      'title': this._options.tooltips.pickHour
                  }).attr('data-action', 'showHours')));
                  bottomRow.append($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'title': this._options.tooltips.decrementHour
                  }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(this._options.icons.down))));
              }
              if (this._isEnabled('m')) {
                  if (this._isEnabled('h')) {
                      topRow.append($('<td>').addClass('separator'));
                      middleRow.append($('<td>').addClass('separator').html(':'));
                      bottomRow.append($('<td>').addClass('separator'));
                  }
                  topRow.append($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'title': this._options.tooltips.incrementMinute
                  }).addClass('btn').attr('data-action', 'incrementMinutes').append($('<span>').addClass(this._options.icons.up))));
                  middleRow.append($('<td>').append($('<span>').addClass('timepicker-minute').attr({
                      'data-time-component': 'minutes',
                      'title': this._options.tooltips.pickMinute
                  }).attr('data-action', 'showMinutes')));
                  bottomRow.append($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'title': this._options.tooltips.decrementMinute
                  }).addClass('btn').attr('data-action', 'decrementMinutes').append($('<span>').addClass(this._options.icons.down))));
              }
              if (this._isEnabled('s')) {
                  if (this._isEnabled('m')) {
                      topRow.append($('<td>').addClass('separator'));
                      middleRow.append($('<td>').addClass('separator').html(':'));
                      bottomRow.append($('<td>').addClass('separator'));
                  }
                  topRow.append($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'title': this._options.tooltips.incrementSecond
                  }).addClass('btn').attr('data-action', 'incrementSeconds').append($('<span>').addClass(this._options.icons.up))));
                  middleRow.append($('<td>').append($('<span>').addClass('timepicker-second').attr({
                      'data-time-component': 'seconds',
                      'title': this._options.tooltips.pickSecond
                  }).attr('data-action', 'showSeconds')));
                  bottomRow.append($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'title': this._options.tooltips.decrementSecond
                  }).addClass('btn').attr('data-action', 'decrementSeconds').append($('<span>').addClass(this._options.icons.down))));
              }
  
              if (!this.use24Hours) {
                  topRow.append($('<td>').addClass('separator'));
                  middleRow.append($('<td>').append($('<button>').addClass('btn btn-primary').attr({
                      'data-action': 'togglePeriod',
                      tabindex: '-1',
                      'title': this._options.tooltips.togglePeriod
                  })));
                  bottomRow.append($('<td>').addClass('separator'));
              }
  
              return $('<div>').addClass('timepicker-picker').append($('<table>').addClass('table-condensed').append([topRow, middleRow, bottomRow]));
          };
  
          TempusDominusBootstrap4.prototype._getTimePickerTemplate = function _getTimePickerTemplate() {
              var hoursView = $('<div>').addClass('timepicker-hours').append($('<table>').addClass('table-condensed')),
                  minutesView = $('<div>').addClass('timepicker-minutes').append($('<table>').addClass('table-condensed')),
                  secondsView = $('<div>').addClass('timepicker-seconds').append($('<table>').addClass('table-condensed')),
                  ret = [this._getTimePickerMainTemplate()];
  
              if (this._isEnabled('h')) {
                  ret.push(hoursView);
              }
              if (this._isEnabled('m')) {
                  ret.push(minutesView);
              }
              if (this._isEnabled('s')) {
                  ret.push(secondsView);
              }
  
              return ret;
          };
  
          TempusDominusBootstrap4.prototype._getToolbar = function _getToolbar() {
              var row = [];
              if (this._options.buttons.showToday) {
                  row.push($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'data-action': 'today',
                      'title': this._options.tooltips.today
                  }).append($('<span>').addClass(this._options.icons.today))));
              }
              if (!this._options.sideBySide && this._hasDate() && this._hasTime()) {
                  var title = void 0,
                      icon = void 0;
                  if (this._options.viewMode === 'times') {
                      title = this._options.tooltips.selectDate;
                      icon = this._options.icons.date;
                  } else {
                      title = this._options.tooltips.selectTime;
                      icon = this._options.icons.time;
                  }
                  row.push($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'data-action': 'togglePicker',
                      'title': title
                  }).append($('<span>').addClass(icon))));
              }
              if (this._options.buttons.showClear) {
                  row.push($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'data-action': 'clear',
                      'title': this._options.tooltips.clear
                  }).append($('<span>').addClass(this._options.icons.clear))));
              }
              if (this._options.buttons.showClose) {
                  row.push($('<td>').append($('<a>').attr({
                      href: '#',
                      tabindex: '-1',
                      'data-action': 'close',
                      'title': this._options.tooltips.close
                  }).append($('<span>').addClass(this._options.icons.close))));
              }
              return row.length === 0 ? '' : $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
          };
  
          TempusDominusBootstrap4.prototype._getTemplate = function _getTemplate() {
              var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                  dateView = $('<div>').addClass('datepicker').append(this._getDatePickerTemplate()),
                  timeView = $('<div>').addClass('timepicker').append(this._getTimePickerTemplate()),
                  content = $('<ul>').addClass('list-unstyled'),
                  toolbar = $('<li>').addClass('picker-switch' + (this._options.collapse ? ' accordion-toggle' : '')).append(this._getToolbar());
  
              if (this._options.inline) {
                  template.removeClass('dropdown-menu');
              }
  
              if (this.use24Hours) {
                  template.addClass('usetwentyfour');
              }
              if (this._isEnabled('s') && !this.use24Hours) {
                  template.addClass('wider');
              }
  
              if (this._options.sideBySide && this._hasDate() && this._hasTime()) {
                  template.addClass('timepicker-sbs');
                  if (this._options.toolbarPlacement === 'top') {
                      template.append(toolbar);
                  }
                  template.append($('<div>').addClass('row').append(dateView.addClass('col-md-6')).append(timeView.addClass('col-md-6')));
                  if (this._options.toolbarPlacement === 'bottom' || this._options.toolbarPlacement === 'default') {
                      template.append(toolbar);
                  }
                  return template;
              }
  
              if (this._options.toolbarPlacement === 'top') {
                  content.append(toolbar);
              }
              if (this._hasDate()) {
                  content.append($('<li>').addClass(this._options.collapse && this._hasTime() ? 'collapse' : '').addClass(this._options.collapse && this._hasTime() && this._options.viewMode === 'times' ? '' : 'show').append(dateView));
              }
              if (this._options.toolbarPlacement === 'default') {
                  content.append(toolbar);
              }
              if (this._hasTime()) {
                  content.append($('<li>').addClass(this._options.collapse && this._hasDate() ? 'collapse' : '').addClass(this._options.collapse && this._hasDate() && this._options.viewMode === 'times' ? 'show' : '').append(timeView));
              }
              if (this._options.toolbarPlacement === 'bottom') {
                  content.append(toolbar);
              }
              return template.append(content);
          };
  
          TempusDominusBootstrap4.prototype._place = function _place(e) {
              var self = e && e.data && e.data.picker || this,
                  vertical = self._options.widgetPositioning.vertical,
                  horizontal = self._options.widgetPositioning.horizontal,
                  parent = void 0;
              var position = (self.component && self.component.length ? self.component : self._element).position(),
                  offset = (self.component && self.component.length ? self.component : self._element).offset();
              if (self._options.widgetParent) {
                  parent = self._options.widgetParent.append(self.widget);
              } else if (self._element.is('input')) {
                  parent = self._element.after(self.widget).parent();
              } else if (self._options.inline) {
                  parent = self._element.append(self.widget);
                  return;
              } else {
                  parent = self._element;
                  self._element.children().first().after(self.widget);
              }
  
              // Top and bottom logic
              if (vertical === 'auto') {
                  //noinspection JSValidateTypes
                  if (offset.top + self.widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() && self.widget.height() + self._element.outerHeight() < offset.top) {
                      vertical = 'top';
                  } else {
                      vertical = 'bottom';
                  }
              }
  
              // Left and right logic
              if (horizontal === 'auto') {
                  if (parent.width() < offset.left + self.widget.outerWidth() / 2 && offset.left + self.widget.outerWidth() > $(window).width()) {
                      horizontal = 'right';
                  } else {
                      horizontal = 'left';
                  }
              }
  
              if (vertical === 'top') {
                  self.widget.addClass('top').removeClass('bottom');
              } else {
                  self.widget.addClass('bottom').removeClass('top');
              }
  
              if (horizontal === 'right') {
                  self.widget.addClass('float-right');
              } else {
                  self.widget.removeClass('float-right');
              }
  
              // find the first parent element that has a relative css positioning
              if (parent.css('position') !== 'relative') {
                  parent = parent.parents().filter(function () {
                      return $(this).css('position') === 'relative';
                  }).first();
              }
  
              if (parent.length === 0) {
                  throw new Error('datetimepicker component should be placed within a relative positioned container');
              }
  
              self.widget.css({
                  top: vertical === 'top' ? 'auto' : position.top + self._element.outerHeight() + 'px',
                  bottom: vertical === 'top' ? parent.outerHeight() - (parent === self._element ? 0 : position.top) + 'px' : 'auto',
                  left: horizontal === 'left' ? (parent === self._element ? 0 : position.left) + 'px' : 'auto',
                  right: horizontal === 'left' ? 'auto' : parent.outerWidth() - self._element.outerWidth() - (parent === self._element ? 0 : position.left) + 'px'
              });
          };
  
          TempusDominusBootstrap4.prototype._fillDow = function _fillDow() {
              var row = $('<tr>'),
                  currentDate = this._viewDate.clone().startOf('w').startOf('d');
  
              if (this._options.calendarWeeks === true) {
                  row.append($('<th>').addClass('cw').text('#'));
              }
  
              while (currentDate.isBefore(this._viewDate.clone().endOf('w'))) {
                  row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                  currentDate.add(1, 'd');
              }
              this.widget.find('.datepicker-days thead').append(row);
          };
  
          TempusDominusBootstrap4.prototype._fillMonths = function _fillMonths() {
              var spans = [],
                  monthsShort = this._viewDate.clone().startOf('y').startOf('d');
              while (monthsShort.isSame(this._viewDate, 'y')) {
                  spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                  monthsShort.add(1, 'M');
              }
              this.widget.find('.datepicker-months td').empty().append(spans);
          };
  
          TempusDominusBootstrap4.prototype._updateMonths = function _updateMonths() {
              var monthsView = this.widget.find('.datepicker-months'),
                  monthsViewHeader = monthsView.find('th'),
                  months = monthsView.find('tbody').find('span'),
                  self = this;
  
              monthsViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevYear);
              monthsViewHeader.eq(1).attr('title', this._options.tooltips.selectYear);
              monthsViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextYear);
  
              monthsView.find('.disabled').removeClass('disabled');
  
              if (!this._isValid(this._viewDate.clone().subtract(1, 'y'), 'y')) {
                  monthsViewHeader.eq(0).addClass('disabled');
              }
  
              monthsViewHeader.eq(1).text(this._viewDate.year());
  
              if (!this._isValid(this._viewDate.clone().add(1, 'y'), 'y')) {
                  monthsViewHeader.eq(2).addClass('disabled');
              }
  
              months.removeClass('active');
              if (this._getLastPickedDate().isSame(this._viewDate, 'y') && !this.unset) {
                  months.eq(this._getLastPickedDate().month()).addClass('active');
              }
  
              months.each(function (index) {
                  if (!self._isValid(self._viewDate.clone().month(index), 'M')) {
                      $(this).addClass('disabled');
                  }
              });
          };
  
          TempusDominusBootstrap4.prototype._getStartEndYear = function _getStartEndYear(factor, year) {
              var step = factor / 10,
                  startYear = Math.floor(year / factor) * factor,
                  endYear = startYear + step * 9,
                  focusValue = Math.floor(year / step) * step;
              return [startYear, endYear, focusValue];
          };
  
          TempusDominusBootstrap4.prototype._updateYears = function _updateYears() {
              var yearsView = this.widget.find('.datepicker-years'),
                  yearsViewHeader = yearsView.find('th'),
                  yearCaps = this._getStartEndYear(10, this._viewDate.year()),
                  startYear = this._viewDate.clone().year(yearCaps[0]),
                  endYear = this._viewDate.clone().year(yearCaps[1]);
              var html = '';
  
              yearsViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevDecade);
              yearsViewHeader.eq(1).attr('title', this._options.tooltips.selectDecade);
              yearsViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextDecade);
  
              yearsView.find('.disabled').removeClass('disabled');
  
              if (this._options.minDate && this._options.minDate.isAfter(startYear, 'y')) {
                  yearsViewHeader.eq(0).addClass('disabled');
              }
  
              yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());
  
              if (this._options.maxDate && this._options.maxDate.isBefore(endYear, 'y')) {
                  yearsViewHeader.eq(2).addClass('disabled');
              }
  
              html += '<span data-action="selectYear" class="year old' + (!this._isValid(startYear, 'y') ? ' disabled' : '') + '">' + (startYear.year() - 1) + '</span>';
              while (!startYear.isAfter(endYear, 'y')) {
                  html += '<span data-action="selectYear" class="year' + (startYear.isSame(this._getLastPickedDate(), 'y') && !this.unset ? ' active' : '') + (!this._isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                  startYear.add(1, 'y');
              }
              html += '<span data-action="selectYear" class="year old' + (!this._isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
  
              yearsView.find('td').html(html);
          };
  
          TempusDominusBootstrap4.prototype._updateDecades = function _updateDecades() {
              var decadesView = this.widget.find('.datepicker-decades'),
                  decadesViewHeader = decadesView.find('th'),
                  yearCaps = this._getStartEndYear(100, this._viewDate.year()),
                  startDecade = this._viewDate.clone().year(yearCaps[0]),
                  endDecade = this._viewDate.clone().year(yearCaps[1]);
              var minDateDecade = false,
                  maxDateDecade = false,
                  endDecadeYear = void 0,
                  html = '';
  
              decadesViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevCentury);
              decadesViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextCentury);
  
              decadesView.find('.disabled').removeClass('disabled');
  
              if (startDecade.year() === 0 || this._options.minDate && this._options.minDate.isAfter(startDecade, 'y')) {
                  decadesViewHeader.eq(0).addClass('disabled');
              }
  
              decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());
  
              if (this._options.maxDate && this._options.maxDate.isBefore(endDecade, 'y')) {
                  decadesViewHeader.eq(2).addClass('disabled');
              }
  
              if (startDecade.year() - 10 < 0) {
                  html += '<span>&nbsp;</span>';
              } else {
                  html += '<span data-action="selectDecade" class="decade old" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() - 10) + '</span>';
              }
  
              while (!startDecade.isAfter(endDecade, 'y')) {
                  endDecadeYear = startDecade.year() + 11;
                  minDateDecade = this._options.minDate && this._options.minDate.isAfter(startDecade, 'y') && this._options.minDate.year() <= endDecadeYear;
                  maxDateDecade = this._options.maxDate && this._options.maxDate.isAfter(startDecade, 'y') && this._options.maxDate.year() <= endDecadeYear;
                  html += '<span data-action="selectDecade" class="decade' + (this._getLastPickedDate().isAfter(startDecade) && this._getLastPickedDate().year() <= endDecadeYear ? ' active' : '') + (!this._isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + startDecade.year() + '</span>';
                  startDecade.add(10, 'y');
              }
              html += '<span data-action="selectDecade" class="decade old" data-selection="' + (startDecade.year() + 6) + '">' + startDecade.year() + '</span>';
  
              decadesView.find('td').html(html);
          };
  
          TempusDominusBootstrap4.prototype._fillDate = function _fillDate() {
              var daysView = this.widget.find('.datepicker-days'),
                  daysViewHeader = daysView.find('th'),
                  html = [];
              var currentDate = void 0,
                  row = void 0,
                  clsName = void 0,
                  i = void 0;
  
              if (!this._hasDate()) {
                  return;
              }
  
              daysViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevMonth);
              daysViewHeader.eq(1).attr('title', this._options.tooltips.selectMonth);
              daysViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextMonth);
  
              daysView.find('.disabled').removeClass('disabled');
              daysViewHeader.eq(1).text(this._viewDate.format(this._options.dayViewHeaderFormat));
  
              if (!this._isValid(this._viewDate.clone().subtract(1, 'M'), 'M')) {
                  daysViewHeader.eq(0).addClass('disabled');
              }
              if (!this._isValid(this._viewDate.clone().add(1, 'M'), 'M')) {
                  daysViewHeader.eq(2).addClass('disabled');
              }
  
              currentDate = this._viewDate.clone().startOf('M').startOf('w').startOf('d');
  
              for (i = 0; i < 42; i++) {
                  //always display 42 days (should show 6 weeks)
                  if (currentDate.weekday() === 0) {
                      row = $('<tr>');
                      if (this._options.calendarWeeks) {
                          row.append('<td class="cw">' + currentDate.week() + '</td>');
                      }
                      html.push(row);
                  }
                  clsName = '';
                  if (currentDate.isBefore(this._viewDate, 'M')) {
                      clsName += ' old';
                  }
                  if (currentDate.isAfter(this._viewDate, 'M')) {
                      clsName += ' new';
                  }
                  if (this._options.allowMultidate) {
                      var index = this._datesFormatted.indexOf(currentDate.format('YYYY-MM-DD'));
                      if (index !== -1) {
                          if (currentDate.isSame(this._datesFormatted[index], 'd') && !this.unset) {
                              clsName += ' active';
                          }
                      }
                  } else {
                      if (currentDate.isSame(this._getLastPickedDate(), 'd') && !this.unset) {
                          clsName += ' active';
                      }
                  }
                  if (!this._isValid(currentDate, 'd')) {
                      clsName += ' disabled';
                  }
                  if (currentDate.isSame(this.getMoment(), 'd')) {
                      clsName += ' today';
                  }
                  if (currentDate.day() === 0 || currentDate.day() === 6) {
                      clsName += ' weekend';
                  }
                  row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
                  currentDate.add(1, 'd');
              }
  
              daysView.find('tbody').empty().append(html);
  
              this._updateMonths();
  
              this._updateYears();
  
              this._updateDecades();
          };
  
          TempusDominusBootstrap4.prototype._fillHours = function _fillHours() {
              var table = this.widget.find('.timepicker-hours table'),
                  currentHour = this._viewDate.clone().startOf('d'),
                  html = [];
              var row = $('<tr>');
  
              if (this._viewDate.hour() > 11 && !this.use24Hours) {
                  currentHour.hour(12);
              }
              while (currentHour.isSame(this._viewDate, 'd') && (this.use24Hours || this._viewDate.hour() < 12 && currentHour.hour() < 12 || this._viewDate.hour() > 11)) {
                  if (currentHour.hour() % 4 === 0) {
                      row = $('<tr>');
                      html.push(row);
                  }
                  row.append('<td data-action="selectHour" class="hour' + (!this._isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(this.use24Hours ? 'HH' : 'hh') + '</td>');
                  currentHour.add(1, 'h');
              }
              table.empty().append(html);
          };
  
          TempusDominusBootstrap4.prototype._fillMinutes = function _fillMinutes() {
              var table = this.widget.find('.timepicker-minutes table'),
                  currentMinute = this._viewDate.clone().startOf('h'),
                  html = [],
                  step = this._options.stepping === 1 ? 5 : this._options.stepping;
              var row = $('<tr>');
  
              while (this._viewDate.isSame(currentMinute, 'h')) {
                  if (currentMinute.minute() % (step * 4) === 0) {
                      row = $('<tr>');
                      html.push(row);
                  }
                  row.append('<td data-action="selectMinute" class="minute' + (!this._isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                  currentMinute.add(step, 'm');
              }
              table.empty().append(html);
          };
  
          TempusDominusBootstrap4.prototype._fillSeconds = function _fillSeconds() {
              var table = this.widget.find('.timepicker-seconds table'),
                  currentSecond = this._viewDate.clone().startOf('m'),
                  html = [];
              var row = $('<tr>');
  
              while (this._viewDate.isSame(currentSecond, 'm')) {
                  if (currentSecond.second() % 20 === 0) {
                      row = $('<tr>');
                      html.push(row);
                  }
                  row.append('<td data-action="selectSecond" class="second' + (!this._isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                  currentSecond.add(5, 's');
              }
  
              table.empty().append(html);
          };
  
          TempusDominusBootstrap4.prototype._fillTime = function _fillTime() {
              var toggle = void 0,
                  newDate = void 0;
              var timeComponents = this.widget.find('.timepicker span[data-time-component]');
  
              if (!this.use24Hours) {
                  toggle = this.widget.find('.timepicker [data-action=togglePeriod]');
                  newDate = this._getLastPickedDate().clone().add(this._getLastPickedDate().hours() >= 12 ? -12 : 12, 'h');
  
                  toggle.text(this._getLastPickedDate().format('A'));
  
                  if (this._isValid(newDate, 'h')) {
                      toggle.removeClass('disabled');
                  } else {
                      toggle.addClass('disabled');
                  }
              }
              timeComponents.filter('[data-time-component=hours]').text(this._getLastPickedDate().format('' + (this.use24Hours ? 'HH' : 'hh')));
              timeComponents.filter('[data-time-component=minutes]').text(this._getLastPickedDate().format('mm'));
              timeComponents.filter('[data-time-component=seconds]').text(this._getLastPickedDate().format('ss'));
  
              this._fillHours();
              this._fillMinutes();
              this._fillSeconds();
          };
  
          TempusDominusBootstrap4.prototype._doAction = function _doAction(e, action) {
              var lastPicked = this._getLastPickedDate();
              if ($(e.currentTarget).is('.disabled')) {
                  return false;
              }
              action = action || $(e.currentTarget).data('action');
              switch (action) {
                  case 'next':
                      {
                          var navFnc = DateTimePicker.DatePickerModes[this.currentViewMode].NAV_FUNCTION;
                          this._viewDate.add(DateTimePicker.DatePickerModes[this.currentViewMode].NAV_STEP, navFnc);
                          this._fillDate();
                          this._viewUpdate(navFnc);
                          break;
                      }
                  case 'previous':
                      {
                          var _navFnc = DateTimePicker.DatePickerModes[this.currentViewMode].NAV_FUNCTION;
                          this._viewDate.subtract(DateTimePicker.DatePickerModes[this.currentViewMode].NAV_STEP, _navFnc);
                          this._fillDate();
                          this._viewUpdate(_navFnc);
                          break;
                      }
                  case 'pickerSwitch':
                      this._showMode(1);
                      break;
                  case 'selectMonth':
                      {
                          var month = $(e.target).closest('tbody').find('span').index($(e.target));
                          this._viewDate.month(month);
                          if (this.currentViewMode === this.MinViewModeNumber) {
                              this._setValue(lastPicked.clone().year(this._viewDate.year()).month(this._viewDate.month()), this._getLastPickedDateIndex());
                              if (!this._options.inline) {
                                  this.hide();
                              }
                          } else {
                              this._showMode(-1);
                              this._fillDate();
                          }
                          this._viewUpdate('M');
                          break;
                      }
                  case 'selectYear':
                      {
                          var year = parseInt($(e.target).text(), 10) || 0;
                          this._viewDate.year(year);
                          if (this.currentViewMode === this.MinViewModeNumber) {
                              this._setValue(lastPicked.clone().year(this._viewDate.year()), this._getLastPickedDateIndex());
                              if (!this._options.inline) {
                                  this.hide();
                              }
                          } else {
                              this._showMode(-1);
                              this._fillDate();
                          }
                          this._viewUpdate('YYYY');
                          break;
                      }
                  case 'selectDecade':
                      {
                          var _year = parseInt($(e.target).data('selection'), 10) || 0;
                          this._viewDate.year(_year);
                          if (this.currentViewMode === this.MinViewModeNumber) {
                              this._setValue(lastPicked.clone().year(this._viewDate.year()), this._getLastPickedDateIndex());
                              if (!this._options.inline) {
                                  this.hide();
                              }
                          } else {
                              this._showMode(-1);
                              this._fillDate();
                          }
                          this._viewUpdate('YYYY');
                          break;
                      }
                  case 'selectDay':
                      {
                          var day = this._viewDate.clone();
                          if ($(e.target).is('.old')) {
                              day.subtract(1, 'M');
                          }
                          if ($(e.target).is('.new')) {
                              day.add(1, 'M');
                          }
  
                          var selectDate = day.date(parseInt($(e.target).text(), 10)),
                              index = 0;
                          if (this._options.allowMultidate) {
                              index = this._datesFormatted.indexOf(selectDate.format('YYYY-MM-DD'));
                              if (index !== -1) {
                                  this._setValue(null, index); //deselect multidate
                              } else {
                                  this._setValue(selectDate, this._getLastPickedDateIndex() + 1);
                              }
                          } else {
                              this._setValue(selectDate, this._getLastPickedDateIndex());
                          }
  
                          if (!this._hasTime() && !this._options.keepOpen && !this._options.inline && !this._options.allowMultidate) {
                              this.hide();
                          }
                          break;
                      }
                  case 'incrementHours':
                      {
                          var newDate = lastPicked.clone().add(1, 'h');
                          if (this._isValid(newDate, 'h')) {
                              this._setValue(newDate, this._getLastPickedDateIndex());
                          }
                          break;
                      }
                  case 'incrementMinutes':
                      {
                          var _newDate = lastPicked.clone().add(this._options.stepping, 'm');
                          if (this._isValid(_newDate, 'm')) {
                              this._setValue(_newDate, this._getLastPickedDateIndex());
                          }
                          break;
                      }
                  case 'incrementSeconds':
                      {
                          var _newDate2 = lastPicked.clone().add(1, 's');
                          if (this._isValid(_newDate2, 's')) {
                              this._setValue(_newDate2, this._getLastPickedDateIndex());
                          }
                          break;
                      }
                  case 'decrementHours':
                      {
                          var _newDate3 = lastPicked.clone().subtract(1, 'h');
                          if (this._isValid(_newDate3, 'h')) {
                              this._setValue(_newDate3, this._getLastPickedDateIndex());
                          }
                          break;
                      }
                  case 'decrementMinutes':
                      {
                          var _newDate4 = lastPicked.clone().subtract(this._options.stepping, 'm');
                          if (this._isValid(_newDate4, 'm')) {
                              this._setValue(_newDate4, this._getLastPickedDateIndex());
                          }
                          break;
                      }
                  case 'decrementSeconds':
                      {
                          var _newDate5 = lastPicked.clone().subtract(1, 's');
                          if (this._isValid(_newDate5, 's')) {
                              this._setValue(_newDate5, this._getLastPickedDateIndex());
                          }
                          break;
                      }
                  case 'togglePeriod':
                      {
                          this._setValue(lastPicked.clone().add(lastPicked.hours() >= 12 ? -12 : 12, 'h'), this._getLastPickedDateIndex());
                          break;
                      }
                  case 'togglePicker':
                      {
                          var $this = $(e.target),
                              $link = $this.closest('a'),
                              $parent = $this.closest('ul'),
                              expanded = $parent.find('.show'),
                              closed = $parent.find('.collapse:not(.show)'),
                              $span = $this.is('span') ? $this : $this.find('span');
                          var collapseData = void 0;
  
                          if (expanded && expanded.length) {
                              collapseData = expanded.data('collapse');
                              if (collapseData && collapseData.transitioning) {
                                  return true;
                              }
                              if (expanded.collapse) {
                                  // if collapse plugin is available through bootstrap.js then use it
                                  expanded.collapse('hide');
                                  closed.collapse('show');
                              } else {
                                  // otherwise just toggle in class on the two views
                                  expanded.removeClass('show');
                                  closed.addClass('show');
                              }
                              $span.toggleClass(this._options.icons.time + ' ' + this._options.icons.date);
  
                              if ($span.hasClass(this._options.icons.date)) {
                                  $link.attr('title', this._options.tooltips.selectDate);
                              } else {
                                  $link.attr('title', this._options.tooltips.selectTime);
                              }
                          }
                      }
                      break;
                  case 'showPicker':
                      this.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                      this.widget.find('.timepicker .timepicker-picker').show();
                      break;
                  case 'showHours':
                      this.widget.find('.timepicker .timepicker-picker').hide();
                      this.widget.find('.timepicker .timepicker-hours').show();
                      break;
                  case 'showMinutes':
                      this.widget.find('.timepicker .timepicker-picker').hide();
                      this.widget.find('.timepicker .timepicker-minutes').show();
                      break;
                  case 'showSeconds':
                      this.widget.find('.timepicker .timepicker-picker').hide();
                      this.widget.find('.timepicker .timepicker-seconds').show();
                      break;
                  case 'selectHour':
                      {
                          var hour = parseInt($(e.target).text(), 10);
  
                          if (!this.use24Hours) {
                              if (lastPicked.hours() >= 12) {
                                  if (hour !== 12) {
                                      hour += 12;
                                  }
                              } else {
                                  if (hour === 12) {
                                      hour = 0;
                                  }
                              }
                          }
                          this._setValue(lastPicked.clone().hours(hour), this._getLastPickedDateIndex());
                          if (!this._isEnabled('a') && !this._isEnabled('m') && !this._options.keepOpen && !this._options.inline) {
                              this.hide();
                          } else {
                              this._doAction(e, 'showPicker');
                          }
                          break;
                      }
                  case 'selectMinute':
                      this._setValue(lastPicked.clone().minutes(parseInt($(e.target).text(), 10)), this._getLastPickedDateIndex());
                      if (!this._isEnabled('a') && !this._isEnabled('s') && !this._options.keepOpen && !this._options.inline) {
                          this.hide();
                      } else {
                          this._doAction(e, 'showPicker');
                      }
                      break;
                  case 'selectSecond':
                      this._setValue(lastPicked.clone().seconds(parseInt($(e.target).text(), 10)), this._getLastPickedDateIndex());
                      if (!this._isEnabled('a') && !this._options.keepOpen && !this._options.inline) {
                          this.hide();
                      } else {
                          this._doAction(e, 'showPicker');
                      }
                      break;
                  case 'clear':
                      this.clear();
                      break;
                  case 'close':
                      this.hide();
                      break;
                  case 'today':
                      {
                          var todaysDate = this.getMoment();
                          if (this._isValid(todaysDate, 'd')) {
                              this._setValue(todaysDate, this._getLastPickedDateIndex());
                          }
                          break;
                      }
              }
              return false;
          };
  
          //public
  
  
          TempusDominusBootstrap4.prototype.hide = function hide() {
              var transitioning = false;
              if (!this.widget) {
                  return;
              }
              // Ignore event if in the middle of a picker transition
              this.widget.find('.collapse').each(function () {
                  var collapseData = $(this).data('collapse');
                  if (collapseData && collapseData.transitioning) {
                      transitioning = true;
                      return false;
                  }
                  return true;
              });
              if (transitioning) {
                  return;
              }
              if (this.component && this.component.hasClass('btn')) {
                  this.component.toggleClass('active');
              }
              this.widget.hide();
  
              $(window).off('resize', this._place());
              this.widget.off('click', '[data-action]');
              this.widget.off('mousedown', false);
  
              this.widget.remove();
              this.widget = false;
  
              this._notifyEvent({
                  type: DateTimePicker.Event.HIDE,
                  date: this._getLastPickedDate().clone()
              });
  
              if (this.input !== undefined) {
                  this.input.blur();
              }
  
              this._viewDate = this._getLastPickedDate().clone();
          };
  
          TempusDominusBootstrap4.prototype.show = function show() {
              var currentMoment = void 0;
              var useCurrentGranularity = {
                  'year': function year(m) {
                      return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                  },
                  'month': function month(m) {
                      return m.date(1).hours(0).seconds(0).minutes(0);
                  },
                  'day': function day(m) {
                      return m.hours(0).seconds(0).minutes(0);
                  },
                  'hour': function hour(m) {
                      return m.seconds(0).minutes(0);
                  },
                  'minute': function minute(m) {
                      return m.seconds(0);
                  }
              };
  
              if (this.input !== undefined) {
                  if (this.input.prop('disabled') || !this._options.ignoreReadonly && this.input.prop('readonly') || this.widget) {
                      return;
                  }
                  if (this.input.val() !== undefined && this.input.val().trim().length !== 0) {
                      this._setValue(this._parseInputDate(this.input.val().trim()), 0);
                  } else if (this.unset && this._options.useCurrent) {
                      currentMoment = this.getMoment();
                      if (typeof this._options.useCurrent === 'string') {
                          currentMoment = useCurrentGranularity[this._options.useCurrent](currentMoment);
                      }
                      this._setValue(currentMoment, 0);
                  }
              } else if (this.unset && this._options.useCurrent) {
                  currentMoment = this.getMoment();
                  if (typeof this._options.useCurrent === 'string') {
                      currentMoment = useCurrentGranularity[this._options.useCurrent](currentMoment);
                  }
                  this._setValue(currentMoment, 0);
              }
  
              this.widget = this._getTemplate();
  
              this._fillDow();
              this._fillMonths();
  
              this.widget.find('.timepicker-hours').hide();
              this.widget.find('.timepicker-minutes').hide();
              this.widget.find('.timepicker-seconds').hide();
  
              this._update();
              this._showMode();
  
              $(window).on('resize', { picker: this }, this._place);
              this.widget.on('click', '[data-action]', $.proxy(this._doAction, this)); // this handles clicks on the widget
              this.widget.on('mousedown', false);
  
              if (this.component && this.component.hasClass('btn')) {
                  this.component.toggleClass('active');
              }
              this._place();
              this.widget.show();
              if (this.input !== undefined && this._options.focusOnShow && !this.input.is(':focus')) {
                  this.input.focus();
              }
  
              this._notifyEvent({
                  type: DateTimePicker.Event.SHOW
              });
          };
  
          TempusDominusBootstrap4.prototype.destroy = function destroy() {
              this.hide();
              //todo doc off?
              this._element.removeData(DateTimePicker.DATA_KEY);
              this._element.removeData('date');
          };
  
          TempusDominusBootstrap4.prototype.disable = function disable() {
              this.hide();
              if (this.component && this.component.hasClass('btn')) {
                  this.component.addClass('disabled');
              }
              if (this.input !== undefined) {
                  this.input.prop('disabled', true); //todo disable this/comp if input is null
              }
          };
  
          TempusDominusBootstrap4.prototype.enable = function enable() {
              if (this.component && this.component.hasClass('btn')) {
                  this.component.removeClass('disabled');
              }
              if (this.input !== undefined) {
                  this.input.prop('disabled', false); //todo enable comp/this if input is null
              }
          };
  
          TempusDominusBootstrap4.prototype.toolbarPlacement = function toolbarPlacement(_toolbarPlacement) {
              if (arguments.length === 0) {
                  return this._options.toolbarPlacement;
              }
  
              if (typeof _toolbarPlacement !== 'string') {
                  throw new TypeError('toolbarPlacement() expects a string parameter');
              }
              if (toolbarPlacements.indexOf(_toolbarPlacement) === -1) {
                  throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
              }
              this._options.toolbarPlacement = _toolbarPlacement;
  
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          TempusDominusBootstrap4.prototype.widgetPositioning = function widgetPositioning(_widgetPositioning) {
              if (arguments.length === 0) {
                  return $.extend({}, this._options.widgetPositioning);
              }
  
              if ({}.toString.call(_widgetPositioning) !== '[object Object]') {
                  throw new TypeError('widgetPositioning() expects an object variable');
              }
              if (_widgetPositioning.horizontal) {
                  if (typeof _widgetPositioning.horizontal !== 'string') {
                      throw new TypeError('widgetPositioning() horizontal variable must be a string');
                  }
                  _widgetPositioning.horizontal = _widgetPositioning.horizontal.toLowerCase();
                  if (horizontalModes.indexOf(_widgetPositioning.horizontal) === -1) {
                      throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                  }
                  this._options.widgetPositioning.horizontal = _widgetPositioning.horizontal;
              }
              if (_widgetPositioning.vertical) {
                  if (typeof _widgetPositioning.vertical !== 'string') {
                      throw new TypeError('widgetPositioning() vertical variable must be a string');
                  }
                  _widgetPositioning.vertical = _widgetPositioning.vertical.toLowerCase();
                  if (verticalModes.indexOf(_widgetPositioning.vertical) === -1) {
                      throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                  }
                  this._options.widgetPositioning.vertical = _widgetPositioning.vertical;
              }
              this._update();
          };
  
          TempusDominusBootstrap4.prototype.widgetParent = function widgetParent(_widgetParent) {
              if (arguments.length === 0) {
                  return this._options.widgetParent;
              }
  
              if (typeof _widgetParent === 'string') {
                  _widgetParent = $(_widgetParent);
              }
  
              if (_widgetParent !== null && typeof _widgetParent !== 'string' && !(_widgetParent instanceof $)) {
                  throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
              }
  
              this._options.widgetParent = _widgetParent;
              if (this.widget) {
                  this.hide();
                  this.show();
              }
          };
  
          //static
  
  
          TempusDominusBootstrap4._jQueryHandleThis = function _jQueryHandleThis(me, option, argument) {
              var data = $(me).data(DateTimePicker.DATA_KEY);
              if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
                  $.extend({}, DateTimePicker.Default, option);
              }
  
              if (!data) {
                  data = new TempusDominusBootstrap4($(me), option);
                  $(me).data(DateTimePicker.DATA_KEY, data);
              }
  
              if (typeof option === 'string') {
                  if (data[option] === undefined) {
                      throw new Error('No method named "' + option + '"');
                  }
                  if (argument === undefined) {
                      return data[option]();
                  } else {
                      return data[option](argument);
                  }
              }
          };
  
          TempusDominusBootstrap4._jQueryInterface = function _jQueryInterface(option, argument) {
              if (this.length === 1) {
                  return TempusDominusBootstrap4._jQueryHandleThis(this[0], option, argument);
              }
              return this.each(function () {
                  TempusDominusBootstrap4._jQueryHandleThis(this, option, argument);
              });
          };
  
          return TempusDominusBootstrap4;
      }(DateTimePicker);
  
      /**
      * ------------------------------------------------------------------------
      * jQuery
      * ------------------------------------------------------------------------
      */
  
  
      $(document).on(DateTimePicker.Event.CLICK_DATA_API, DateTimePicker.Selector.DATA_TOGGLE, function () {
          var $target = getSelectorFromElement($(this));
          if ($target.length === 0) {
              return;
          }
          TempusDominusBootstrap4._jQueryInterface.call($target, 'toggle');
      }).on(DateTimePicker.Event.CHANGE, '.' + DateTimePicker.ClassName.INPUT, function (event) {
          var $target = getSelectorFromElement($(this));
          if ($target.length === 0) {
              return;
          }
          TempusDominusBootstrap4._jQueryInterface.call($target, '_change', event);
      }).on(DateTimePicker.Event.BLUR, '.' + DateTimePicker.ClassName.INPUT, function (event) {
          var $target = getSelectorFromElement($(this)),
              config = $target.data(DateTimePicker.DATA_KEY);
          if ($target.length === 0) {
              return;
          }
          if (config._options.debug || window.debug) {
              return;
          }
          TempusDominusBootstrap4._jQueryInterface.call($target, 'hide', event);
      }).on(DateTimePicker.Event.KEYDOWN, '.' + DateTimePicker.ClassName.INPUT, function (event) {
          var $target = getSelectorFromElement($(this));
          if ($target.length === 0) {
              return;
          }
          TempusDominusBootstrap4._jQueryInterface.call($target, '_keydown', event);
      }).on(DateTimePicker.Event.KEYUP, '.' + DateTimePicker.ClassName.INPUT, function (event) {
          var $target = getSelectorFromElement($(this));
          if ($target.length === 0) {
              return;
          }
          TempusDominusBootstrap4._jQueryInterface.call($target, '_keyup', event);
      }).on(DateTimePicker.Event.FOCUS, '.' + DateTimePicker.ClassName.INPUT, function (event) {
          var $target = getSelectorFromElement($(this)),
              config = $target.data(DateTimePicker.DATA_KEY);
          if ($target.length === 0) {
              return;
          }
          if (!config._options.allowInputToggle) {
              return;
          }
          TempusDominusBootstrap4._jQueryInterface.call($target, 'show', event);
      });
  
      $.fn[DateTimePicker.NAME] = TempusDominusBootstrap4._jQueryInterface;
      $.fn[DateTimePicker.NAME].Constructor = TempusDominusBootstrap4;
      $.fn[DateTimePicker.NAME].noConflict = function () {
          $.fn[DateTimePicker.NAME] = JQUERY_NO_CONFLICT;
          return TempusDominusBootstrap4._jQueryInterface;
      };
  
      return TempusDominusBootstrap4;
  }(jQuery);
  
  }();
  

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/


};

export default combine;