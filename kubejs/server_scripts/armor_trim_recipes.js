// JavaScript source code
ServerEvents.recipes(event => {
	function tidetrim(tideInput) {
		event.smithing(
			'minecraft:tide_armor_trim_smithing_template',
			tideInput,
			'minecraft:diamond',
			'minecraft:prismarine'
		)
	}
	tidetrim('minecraft:sentry_armor_trim_smithing_template')
	tidetrim('minecraft:vex_armor_trim_smithing_template')
	tidetrim('minecraft:wild_armor_trim_smithing_template')
	tidetrim('minecraft:coast_armor_trim_smithing_template')

	tidetrim('minecraft:wayfinder_armor_trim_smithing_template')
	tidetrim('minecraft:raiser_armor_trim_smithing_template')
	tidetrim('minecraft:shaper_armor_trim_smithing_template')
	tidetrim('minecraft:host_armor_trim_smithing_template')


	tidetrim('minecraft:ward_armor_trim_smithing_template')
	tidetrim('minecraft:silence_armor_trim_smithing_template')

	tidetrim('minecraft:snout_armor_trim_smithing_template')
	tidetrim('minecraft:rib_armor_trim_smithing_template')


	tidetrim('minecraft:eye_armor_trim_smithing_template')
	tidetrim('minecraft:spire_armor_trim_smithing_template')

	tidetrim('minecraft:dune_armor_trim_smithing_template')
	tidetrim('yungscavebiomes:ancient_armor_trim_smithing_template')

	function sentrytrim(sentryInput) {
		event.smithing(
			'minecraft:sentry_armor_trim_smithing_template',
			sentryInput,
			'minecraft:diamond',
			'minecraft:cobblestone'
		)
	}
	function vextrim(vexInput) {
		event.smithing(
			'minecraft:vex_armor_trim_smithing_template',
			vexInput,
			'minecraft:diamond',
			'minecraft:cobblestone'
		)
	}
	function wildtrim(wildInput) {
		event.smithing(
			'minecraft:wild_armor_trim_smithing_template',
			wildInput,
			'minecraft:diamond',
			'minecraft:mossy_cobblestone'
		)
	}
	function coasttrim(coastInput) {
		event.smithing(
			'minecraft:coast_armor_trim_smithing_template',
			coastInput,
			'minecraft:diamond',
			'minecraft:cobblestone'
		)
	}

	function wayfindertrim(wayfinderInput) {
		event.smithing(
			'minecraft:wayfinder_armor_trim_smithing_template',
			wayfinderInput,
			'minecraft:diamond',
			'minecraft:terracotta'
		)
	}
	function raisertrim(raiserInput) {
		event.smithing(
			'minecraft:raiser_armor_trim_smithing_template',
			raiserInput,
			'minecraft:diamond',
			'minecraft:terracotta'
		)
	}
	function shapertrim(shaperInput) {
		event.smithing(
			'minecraft:shaper_armor_trim_smithing_template',
			shaperInput,
			'minecraft:diamond',
			'minecraft:terracotta'
		)
	}
	function hosttrim(hostInput) {
		event.smithing(
			'minecraft:host_armor_trim_smithing_template',
			hostInput,
			'minecraft:diamond',
			'minecraft:terracotta'
		)
	}

	function wardtrim(wardInput) {
		event.smithing(
			'minecraft:ward_armor_trim_smithing_template',
			wardInput,
			'minecraft:diamond',
			'minecraft:cobbled_deepslate'
		)
	}
	function silencetrim(silenceInput) {
		event.smithing(
			'minecraft:silence_armor_trim_smithing_template',
			silenceInput,
			'minecraft:diamond',
			'minecraft:cobbled_deepslate'
		)
	}

	function snouttrim(snoutInput) {
		event.smithing(
			'minecraft:snout_armor_trim_smithing_template',
			snoutInput,
			'minecraft:diamond',
			'minecraft:blackstone'
		)
	}
	function ribtrim(ribInput) {
		event.smithing(
			'minecraft:rib_armor_trim_smithing_template',
			ribInput,
			'minecraft:diamond',
			'minecraft:netherrack'
		)
	}

	function eyetrim(eyeInput) {
		event.smithing(
			'minecraft:eye_armor_trim_smithing_template',
			eyeInput,
			'minecraft:diamond',
			'minecraft:end_stone'
		)
	}
	function spiretrim(spireInput) {
		event.smithing(
			'minecraft:spire_armor_trim_smithing_template',
			spireInput,
			'minecraft:diamond',
			'minecraft:purpur_block'
		)
	}

	function dunetrim(duneInput) {
		event.smithing(
			'minecraft:dune_armor_trim_smithing_template',
			duneInput,
			'minecraft:diamond',
			'minecraft:sandstone'
		)
	}
	function ancienttrim(ancientInput) {
		event.smithing(
			'yungscavebiomes:ancient_armor_trim_smithing_template',
			ancientInput,
			'minecraft:diamond',
			'minecraft:sandstone'
		)
	}

	sentrytrim('minecraft:wayfinder_armor_trim_smithing_template')
	sentrytrim('minecraft:ward_armor_trim_smithing_template')
	sentrytrim('minecraft:eye_armor_trim_smithing_template')
	sentrytrim('minecraft:coast_armor_trim_smithing_template')

	vextrim('minecraft:raiser_armor_trim_smithing_template')
	vextrim('minecraft:silence_armor_trim_smithing_template')
	vextrim('minecraft:spire_armor_trim_smithing_template')
	vextrim('minecraft:sentry_armor_trim_smithing_template')

	wildtrim('minecraft:shaper_armor_trim_smithing_template')
	wildtrim('minecraft:snout_armor_trim_smithing_template')
	wildtrim('minecraft:dune_armor_trim_smithing_template')
	wildtrim('minecraft:vex_armor_trim_smithing_template')

	coasttrim('minecraft:host_armor_trim_smithing_template')
	coasttrim('minecraft:rib_armor_trim_smithing_template')
	coasttrim('yungscavebiomes:ancient_armor_trim_smithing_template')
	coasttrim('minecraft:wild_armor_trim_smithing_template')


	wayfindertrim('minecraft:sentry_armor_trim_smithing_template')
	wayfindertrim('minecraft:ward_armor_trim_smithing_template')
	wayfindertrim('minecraft:eye_armor_trim_smithing_template')
	wayfindertrim('minecraft:host_armor_trim_smithing_template')

	raisertrim('minecraft:vex_armor_trim_smithing_template')
	raisertrim('minecraft:silence_armor_trim_smithing_template')
	raisertrim('minecraft:spire_armor_trim_smithing_template')
	raisertrim('minecraft:wayfinder_armor_trim_smithing_template')

	shapertrim('minecraft:wild_armor_trim_smithing_template')
	shapertrim('minecraft:snout_armor_trim_smithing_template')
	shapertrim('minecraft:dune_armor_trim_smithing_template')
	shapertrim('minecraft:raiser_armor_trim_smithing_template')

	hosttrim('minecraft:coast_armor_trim_smithing_template')
	hosttrim('minecraft:rib_armor_trim_smithing_template')
	hosttrim('yungscavebiomes:ancient_armor_trim_smithing_template')
	hosttrim('minecraft:shaper_armor_trim_smithing_template')


	wardtrim('minecraft:sentry_armor_trim_smithing_template')
	wardtrim('minecraft:wayfinder_armor_trim_smithing_template')
	wardtrim('minecraft:eye_armor_trim_smithing_template')
	wardtrim('minecraft:rib_armor_trim_smithing_template')

	silencetrim('minecraft:vex_armor_trim_smithing_template')
	silencetrim('minecraft:raiser_armor_trim_smithing_template')
	silencetrim('minecraft:spire_armor_trim_smithing_template')
	silencetrim('minecraft:ward_armor_trim_smithing_template')

	snouttrim('minecraft:wild_armor_trim_smithing_template')
	snouttrim('minecraft:shaper_armor_trim_smithing_template')
	snouttrim('minecraft:dune_armor_trim_smithing_template')
	snouttrim('minecraft:silence_armor_trim_smithing_template')

	ribtrim('minecraft:coast_armor_trim_smithing_template')
	ribtrim('minecraft:host_armor_trim_smithing_template')
	ribtrim('yungscavebiomes:ancient_armor_trim_smithing_template')
	ribtrim('minecraft:snout_armor_trim_smithing_template')


	eyetrim('minecraft:sentry_armor_trim_smithing_template')
	eyetrim('minecraft:wayfinder_armor_trim_smithing_template')
	eyetrim('minecraft:ward_armor_trim_smithing_template')
	eyetrim('yungscavebiomes:ancient_armor_trim_smithing_template')

	spiretrim('minecraft:vex_armor_trim_smithing_template')
	spiretrim('minecraft:raiser_armor_trim_smithing_template')
	spiretrim('minecraft:silence_armor_trim_smithing_template')
	spiretrim('minecraft:eye_armor_trim_smithing_template')

	dunetrim('minecraft:wild_armor_trim_smithing_template')
	dunetrim('minecraft:shaper_armor_trim_smithing_template')
	dunetrim('minecraft:snout_armor_trim_smithing_template')
	dunetrim('minecraft:spire_armor_trim_smithing_template')

	ancienttrim('minecraft:coast_armor_trim_smithing_template')
	ancienttrim('minecraft:host_armor_trim_smithing_template')
	ancienttrim('minecraft:rib_armor_trim_smithing_template')
	ancienttrim('minecraft:dune_armor_trim_smithing_template')
})