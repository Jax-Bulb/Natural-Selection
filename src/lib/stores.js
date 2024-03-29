import { writable } from 'svelte/store';

export let generations = writable(10);
export let amMice = writable(20);
export let amSnakes = writable(10);
export let amCats = writable(5);
export let sizeX = writable(100);
export let sizeY = writable(100);
export let minMiceCamouflage = writable(2);
export let maxMiceCamouflage = writable(50);
export let minMiceSpeed = writable(3);
export let maxMiceSpeed = writable(6);
export let minSnakeCamouflage = writable(2);
export let maxSnakeCamouflage = writable(50);
export let minSnakeSpeed = writable(7);
export let maxSnakeSpeed = writable(10);
export let minCatSpeed = writable(10);
export let maxCatSpeed = writable(13);
//mice genes
export let minMiceMinHunger = writable(0);
export let maxMiceMinHunger = writable(0);
export let minMiceMaxHunger = writable(15);
export let maxMiceMaxHunger = writable(20);
export let minMiceVision = writable(5);
export let maxMiceVision = writable(10);
export let minMiceHungerGainedFromResting = writable(10);
export let maxMiceHungerGainedFromResting = writable(15);
export let minMiceRestTime = writable(1);
export let maxMiceRestTime = writable(1);
export let minMiceReproductiveRestTime = writable(1);
export let maxMiceReproductiveRestTime = writable(1);
export let minMiceTimeAliveUntilReproduction = writable(2);
export let maxMiceTimeAliveUntilReproduction = writable(4);
export let minMiceGeneMutationChance = writable(10);
export let maxMiceGeneMutationChance = writable(15);
export let minMiceGeneMutationAmount = writable(10);
export let maxMiceGeneMutationAmount = writable(15);
export let minMiceAttractiveness = writable(8);
export let maxMiceAttractiveness = writable(10);
export let minMiceStandards = writable(3);
export let maxMiceStandards = writable(5);
export let minMiceFoodValue = writable(15);
export let maxMiceFoodValue = writable(20);
//snake genes
export let minSnakeMinHunger = writable(7);
export let maxSnakeMinHunger = writable(12);
export let minSnakeMaxHunger = writable(20);
export let maxSnakeMaxHunger = writable(25);
export let minSnakeVision = writable(10);
export let maxSnakeVision = writable(15);
export let minSnakeRestTime = writable(1);
export let maxSnakeRestTime = writable(1);
export let minSnakeReproductiveRestTime = writable(1);
export let maxSnakeReproductiveRestTime = writable(1);
export let minSnakeTimeAliveUntilReproduction = writable(6);
export let maxSnakeTimeAliveUntilReproduction = writable(9);
export let minSnakeGeneMutationChance = writable(10);
export let maxSnakeGeneMutationChance = writable(15);
export let minSnakeGeneMutationAmount = writable(10);
export let maxSnakeGeneMutationAmount = writable(15);
export let minSnakeAttractiveness = writable(8);
export let maxSnakeAttractiveness = writable(10);
export let minSnakeStandards = writable(3);
export let maxSnakeStandards = writable(5);
export let minSnakeAggression = writable(3);
export let maxSnakeAggression = writable(5);
export let minSnakePreyStandards = writable(1);
export let maxSnakePreyStandards = writable(5);
export let minSnakeFoodValue = writable(30);
export let maxSnakeFoodValue = writable(35);
//Cat genes
export let minCatMinHunger = writable(12);
export let maxCatMinHunger = writable(15);
export let minCatMaxHunger = writable(35);
export let maxCatMaxHunger = writable(45);
export let minCatRestTime = writable(1);
export let maxCatRestTime = writable(5);
export let minCatReproductiveRestTime = writable(1);
export let maxCatReproductiveRestTime = writable(1);
export let minCatTimeAliveUntilReproduction = writable(7);
export let maxCatTimeAliveUntilReproduction = writable(9);
export let minCatGeneMutationChance = writable(10);
export let maxCatGeneMutationChance = writable(15);
export let minCatGeneMutationAmount = writable(10);
export let maxCatGeneMutationAmount = writable(15);
export let minCatAttractiveness = writable(8);
export let maxCatAttractiveness = writable(10);
export let minCatStandards = writable(3);
export let maxCatStandards = writable(5);
export let minCatAggression = writable(3);
export let maxCatAggression = writable(5);
export let minCatPreyStandards = writable(1);
export let maxCatPreyStandards = writable(5);
