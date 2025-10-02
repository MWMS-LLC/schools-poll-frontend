// Soundtrack service for schools site - uses static data instead of backend API
class SoundtrackService {
  constructor() {
    this.soundtracks = []
    this.playlists = []
    this.loaded = false
  }

  // Load soundtrack data from static JSON file
  async loadSoundtracks() {
    try {
      // Fetch soundtracks from static JSON file
      const response = await fetch('/soundtracks.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Loaded soundtracks from static file:', data.soundtracks.length)
      
      // Transform the data to match our component's format
      this.soundtracks = data.soundtracks.map(song => ({
        id: song.song_id,
        title: song.song_title,
        mood: song.mood_tag,
        playlist: song.playlist_tag,
        lyrics: song.lyrics_snippet,
        featured: song.featured,
        fileName: song.file_name,
        description: song.description
      }))
      
      // Extract unique playlists
      this.playlists = [...new Set(this.soundtracks.map(song => song.playlist))]
      this.loaded = true
      
      return this.soundtracks
    } catch (error) {
      console.error('Error loading soundtracks:', error)
      // Fallback to empty array
      this.soundtracks = []
      this.playlists = []
      this.loaded = true
      return []
    }
  }

  // Get all soundtracks
  async getSoundtracks() {
    if (!this.loaded) {
      await this.loadSoundtracks()
    }
    return this.soundtracks
  }

  // Get soundtracks by playlist
  async getSoundtracksByPlaylist(playlistName) {
    if (!this.loaded) {
      await this.loadSoundtracks()
    }
    
    if (playlistName === 'All Songs') {
      return this.soundtracks
    }
    
    return this.soundtracks.filter(song => song.playlist === playlistName)
  }

  // Get featured soundtracks
  async getFeaturedSoundtracks() {
    if (!this.loaded) {
      await this.loadSoundtracks()
    }
    
    return this.soundtracks.filter(song => song.featured)
  }

  // Get playlists
  async getPlaylists() {
    if (!this.loaded) {
      await this.loadSoundtracks()
    }
    
    return this.playlists
  }

  // Get soundtrack by ID
  async getSoundtrackById(id) {
    if (!this.loaded) {
      await this.loadSoundtracks()
    }
    
    return this.soundtracks.find(song => song.id === id)
  }

  // Search soundtracks
  async searchSoundtracks(query) {
    if (!this.loaded) {
      await this.loadSoundtracks()
    }
    
    const lowercaseQuery = query.toLowerCase()
    return this.soundtracks.filter(song => 
      song.title.toLowerCase().includes(lowercaseQuery) ||
      song.mood.toLowerCase().includes(lowercaseQuery) ||
      song.lyrics.toLowerCase().includes(lowercaseQuery)
    )
  }
}

export default SoundtrackService