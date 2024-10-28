import React from 'react';
import { ScrollView, FlexboxLayout, Label } from '@nativescript/core';
import { useNavigationContext } from 'react-nativescript-navigation';
import { EventCard } from '../components/EventCard';
import { useEvents } from '../hooks/useEvents';

export function HomeScreen() {
  const navigation = useNavigationContext();
  const { events, loading, error } = useEvents();

  if (loading) {
    return (
      <FlexboxLayout justifyContent="center" alignItems="center" height="100%">
        <Label text="Chargement..." />
      </FlexboxLayout>
    );
  }

  if (error) {
    return (
      <FlexboxLayout justifyContent="center" alignItems="center" height="100%">
        <Label text="Une erreur est survenue" className="text-red-500" />
      </FlexboxLayout>
    );
  }

  return (
    <ScrollView>
      <FlexboxLayout flexDirection="column" padding={16}>
        <Label 
          text="Soirées Entrepreneuriales"
          className="text-2xl font-bold mb-4"
        />
        
        <Label 
          text="Découvrez nos prochains événements"
          className="text-gray-600 mb-6"
        />

        {events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            navigation={navigation}
          />
        ))}
      </FlexboxLayout>
    </ScrollView>
  );
}